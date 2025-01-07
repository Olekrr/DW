import React from 'react';
import { MemberProvider } from './memberContext.js';
import AddMemberForm from './AddMemberForm';
import MemberList from './MemberList';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();

  return (
    <MemberProvider>
      <DndProvider backend={HTML5Backend}>
        <div>
          <h1>Admin Control Panel</h1>
          <AddMemberForm />
          <MemberList />
          <button
            onClick={() => navigate('/raid-assignments')}
          >
            Set up raid assignments
          </button>
        </div>
      </DndProvider>
    </MemberProvider>
  );
};

export default Admin;

