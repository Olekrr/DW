import React, { useEffect, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { getRaidGroups, updateRaidGroup } from '../../apiService';
import './raidgroup.css';

const DroppableSlot = React.memo(({ member, groupName, index, onDrop }) => {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: 'MEMBER',
    drop: (draggedItem) => {
      onDrop(draggedItem, groupName, index);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'MEMBER',
    item: { ...member, sourceGroup: groupName, sourceIndex: index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const className = [
    'droppable-slot',
    isDragging ? 'is-dragging' : '',
    isOver ? 'is-over' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <li
      ref={(node) => {
        dragRef(node);
        dropRef(node);
      }}
      className={className}
    >
      {member.name || 'Empty Slot'}
    </li>
  );
});


const RaidGroup = () => {
  const [raidGroup, setRaidGroup] = useState(null);
  const [error, setError] = useState('');
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [isDropping, setIsDropping] = useState(false);

  const fetchRaidGroup = async () => {
    try {
      const token = localStorage.getItem('token');
      const allRaidGroups = await getRaidGroups(token);

      if (!allRaidGroups.length) {
        throw new Error('No raid groups found');
      }

      setRaidGroup(allRaidGroups[0]);
    } catch (err) {
      console.error('Error fetching raid group:', err);
      setError('Failed to load raid group. Please try again.');
    }
  };

  useEffect(() => {
    fetchRaidGroup();
  }, []);

  const handleDrop = (draggedItem, targetGroupName, targetIndex) => {
    if (isDropping) return;
    setIsDropping(true);
  
    if (!raidGroup || !draggedItem || targetGroupName === undefined || targetIndex === undefined) {
      console.log('Invalid drop:', draggedItem, targetGroupName, targetIndex);
      setIsDropping(false);
      return;
    }
  
    setRaidGroup((prevRaidGroup) => {
      const updatedGroups = JSON.parse(JSON.stringify(prevRaidGroup.groups));
  
      const { sourceGroup, sourceIndex } = draggedItem;
  
      if (sourceGroup === targetGroupName && sourceIndex === targetIndex) {
        console.log('Attempted to drop into the same slot. No changes made.');
        setIsDropping(false);
        return prevRaidGroup;
      }
  
      if (sourceGroup !== undefined && sourceIndex !== undefined) {
        const sourceMember = updatedGroups[sourceGroup][sourceIndex];
        const targetMember = updatedGroups[targetGroupName][targetIndex];
  
        updatedGroups[sourceGroup][sourceIndex] = targetMember;
        updatedGroups[targetGroupName][targetIndex] = sourceMember;
      } else {
        const newMember = {
          memberId: draggedItem.memberId || draggedItem._id,
          name: draggedItem.name || draggedItem.characterName,
          role: draggedItem.role || null,
        };
  
        updatedGroups[targetGroupName][targetIndex] = newMember;
      }
  
      console.log('Updated groups after drop:', updatedGroups);
      setIsDropping(false);
      return {
        ...prevRaidGroup,
        groups: updatedGroups,
      };
    });
  
    setUnsavedChanges(true);
  };
  

  const saveChanges = async () => {
    if (!raidGroup) return;

    try {
      const token = localStorage.getItem('token');
      await updateRaidGroup(raidGroup._id, raidGroup, token);
      setUnsavedChanges(false);
    } catch (err) {
      console.error('Error saving raid group:', err);
      setError('Failed to save raid group.');
    }
  };

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!raidGroup) return <p>Loading...</p>;

  return (
    <div className="raid-group-container">
      <h2>Raid Group: {raidGroup.name}</h2>
      <div className="raid-group-grid">
        {Object.entries(raidGroup.groups).map(([groupName, members]) => (
          <div key={groupName} className="group-column">
            <h3>{groupName}</h3>
            <ul>
              {members.map((member, index) => (
                <DroppableSlot
                  key={`${groupName}-${index}-${member.memberId || 'empty'}`}
                  member={member}
                  groupName={groupName}
                  index={index}
                  onDrop={handleDrop}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button
        onClick={saveChanges}
        className={`button-save ${unsavedChanges ? '' : 'disabled'}`}
        disabled={!unsavedChanges}
      >
        Save Changes
      </button>
    </div>
  );
};

export default RaidGroup;
