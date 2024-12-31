import endpoints from './apiEndpoints';

const addMember = async (memberData, token) => {
  const response = await fetch(endpoints.members, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(memberData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to add member');
  }

  return response.json();
};

export default addMember;
