import endpoints from './apiEndpoints';

const getRaidGroup = async (id, token) => {
  console.log(`Fetching raid group with ID: ${id}`); // Debugging
  const response = await fetch(endpoints.raidGroupById(id), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to fetch raid group');
  }

  return response.json();
};

export default getRaidGroup;
