import endpoints from './apiEndpoints';

const updateRaidGroup = async (id, updatedData, token) => {
  const response = await fetch(endpoints.raidGroupById(id), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updatedData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to update raid group');
  }

  return response.json();
};

export default updateRaidGroup;
