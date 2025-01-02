import React from 'react';
import { MemberProvider } from './memberContext.js';
import AddMemberForm from './AddMemberForm';
import MemberList from './MemberList';

const Admin = () => {
  return (
    <MemberProvider>
      <div>
        <h1>Admin Control Panel</h1>
        <AddMemberForm />
        <MemberList />
      </div>
    </MemberProvider>
  );
};

export default Admin;
