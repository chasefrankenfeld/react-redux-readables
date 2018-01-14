const API = "http://localhost:3001";

// Generate a unique token for the authroisation token to access the backend sever.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

// Get home page posts

export const fetchAllPosts = () => (
  fetch(`${API}/posts`, { headers })
  .then(res => res.json())
);