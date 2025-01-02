import React, { useContext } from 'react';
import { MemberContext } from './memberContext.js';

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
    <div>
      <h2>Member List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div style={{ display: 'flex', gap: '20px' }}>
        {classes.map((className) => (
          <div key={className} style={{ flex: 1 }}>
            <h3>{className}</h3>
            <ul>
              {membersByClass[className] ? (
                membersByClass[className].map((member) => (
                  <li key={member.id}>
                    {member.characterName} ({member.role})
                  </li>
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

export default MemberList;
