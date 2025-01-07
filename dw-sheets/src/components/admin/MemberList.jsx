import React, { useContext } from 'react';
import { useDrag } from 'react-dnd';
import { MemberContext } from './memberContext.js';
import './memberlist.css';

const MemberList = () => {
  const { membersByClass, error } = useContext(MemberContext);

  const classes = [
    'Warrior',
    'Druid',
    'Paladin',
    'Priest',
    'Rogue',
    'Hunter',
    'Mage',
    'Warlock',
  ];

  return (
    <div className="member-list-container">
      <h2>Member List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="member-list-grid">
        {classes.map((className) => (
          <div key={className} className="member-class-column">
            <h3>{className}</h3>
            <ul>
              {membersByClass[className] ? (
                membersByClass[className].map((member) => (
                  <DraggableMember key={member._id || member.id} member={member} />
                ))
              ) : (
                <li>No members</li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const DraggableMember = ({ member }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'MEMBER',
    item: { ...member },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const className = ['draggable-member', isDragging ? 'is-dragging' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <li ref={dragRef} className={className}>
      {member.characterName} ({member.role})
    </li>
  );
};

export default MemberList;
