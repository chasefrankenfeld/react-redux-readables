const API = "http://localhost:3001";

// Generate a unique token for the authroisation token to access the backend sever.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

// GET -  All posts

export const fetchAllPosts = () => (
  fetch(`${API}/posts`, { headers })
  .then(res => res.json())
  .then(data => data)
);

// GET - Categories

export const fetchAllCategories = () => (
  fetch(`${API}/categories`, { headers })
  .then(res => res.json())
  .then(data => data.categories)
)

// GET - Category Posts

export const fetchCategoryPosts = (category) => (
  fetch(`${API}/${category}/posts`, { headers })
  .then(res => res.json())
  .then(data => data)
)

// GET -  Single post
export const fetchPost = (id) => (
  fetch(`${API}/posts/${id}`, { headers })
  .then(res => res.json())
  .then(data => data)
)

// POST - Post Votes

export const postPostVote = (id, option) => (
  fetch(`${API}/posts/${id}`, 
    { 
      method: "POST",
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        option
      })
    }
  ).then(res => res.json())
)

// GET - Post Comments

// COMMMENTS

// GET -  Single Comment
export const fetchPostComments = (id) => (
  fetch(`${API}/posts/${id}/comments`, { headers })
  .then(res => res.json())
  .then(data => data)
)

// POST - Comment Vote

export const postCommentVote = (id, option) => (
  fetch(`${API}/comments/${id}`, 
    { 
      method: "POST",
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        option
      })
    }
  ).then(res => res.json())
)

// POST - Post Comment

export const postComment = (id, timestamp, body, author, parentId) => (
  fetch(`${API}/comments`, 
    { 
      method: "POST",
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id, 
        timestamp, 
        body, 
        author, 
        parentId
      })
    }
  ).then(res => res.json())
)

// DELETE - Post Comment

export const deleteComment = (id) => (
  fetch(`${API}/comments/${id}`, 
    { 
      method: "DELETE",
      headers
    }
  ).then(res => res.json())
)