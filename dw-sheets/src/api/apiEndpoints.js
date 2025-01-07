const API_BASE_URL = "https://dw-backend.vercel.app";

const endpoints = {
  login: `${API_BASE_URL}/auth/login`,
  members: `${API_BASE_URL}/members`,
  memberById: (id) => `${API_BASE_URL}/members/${id}`,
  raidGroups: `${API_BASE_URL}/raid-groups`,
  raidGroupById: (id) => `${API_BASE_URL}/raid-groups/${id}`,
};

export default endpoints;
