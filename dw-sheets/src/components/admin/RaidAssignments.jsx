import React from 'react';
import { MemberProvider } from './memberContext';
import MemberList from './MemberList';
import RaidGroup from './RaidGroup';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const RaidAssignments = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <MemberProvider>
        <div>
          <h1>Raid Assignments</h1>
          <div>
            <MemberList />
            <RaidGroup />
          </div>
        </div>
      </MemberProvider>
    </DndProvider>
  );
};

export default RaidAssignments;
