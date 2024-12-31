import endpoints from './apiEndpoints';

const deleteMember = async (id, token) => {
  const response = await fetch(endpoints.memberById(id), {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to delete member');
  }

  return response.json();
};

export default deleteMember;
