import endpoints from './apiEndpoints';

const updateMember = async (id, memberData, token) => {
  const response = await fetch(endpoints.memberById(id), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(memberData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to update member');
  }

  return response.json();
};

export default updateMember;
