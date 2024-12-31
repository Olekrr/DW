import endpoints from './apiEndpoints';

const getMembers = async (token) => {
  const response = await fetch(endpoints.members, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to fetch members');
  }

  return response.json();
};

export default getMembers;
