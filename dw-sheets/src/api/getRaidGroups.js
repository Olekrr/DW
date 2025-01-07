import endpoints from './apiEndpoints';

const getRaidGroups = async (token) => {
  console.log('Fetching all raid groups'); // Debugging
  const response = await fetch(endpoints.raidGroups, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to fetch raid groups');
  }

  return response.json();
};

export default getRaidGroups;
