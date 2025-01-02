import React, { createContext, useState, useEffect } from 'react';
import getMembers from '../../api/getMembers';
import { addMember } from '../../apiService';

export const MemberContext = createContext();

export const MemberProvider = ({ children }) => {
  const [membersByClass, setMembersByClass] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Authorization token is missing');
        }
        const members = await getMembers(token);
        const groupedMembers = members.reduce((acc, member) => {
          if (!acc[member.class]) {
            acc[member.class] = [];
          }
          acc[member.class].push(member);
          return acc;
        }, {});
        setMembersByClass(groupedMembers);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMembers();
  }, []);

  const handleAddMember = async (newMember) => {
    try {
      const token = localStorage.getItem('token');
      const addedMember = await addMember(newMember, token);
      setMembersByClass((prev) => ({
        ...prev,
        [addedMember.class]: [...(prev[addedMember.class] || []), addedMember],
      }));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <MemberContext.Provider value={{ membersByClass, error, handleAddMember }}>
      {children}
    </MemberContext.Provider>
  );
};
