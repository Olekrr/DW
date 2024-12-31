const API_BASE_URL = "https://dw-backend.vercel.app";

const endpoints = {
  login: `${API_BASE_URL}/login`,
  members: `${API_BASE_URL}/members`,
  memberById: (id) => `${API_BASE_URL}/members/${id}`,
};

export default endpoints;
