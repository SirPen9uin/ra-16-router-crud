import reactLogo from "./assets/react.svg";

const VITE_BACKEND_URL='https://ra-16-router-crud-back.onrender.com'

export async function createPost(payload) {
  await fetch(VITE_BACKEND_URL + "/posts", {
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });
}

export async function deletePost(id) {
  await fetch(VITE_BACKEND_URL + `/posts/${id}`, { method: "DELETE" });
}

export async function getPost(id) {
  const response = await fetch(VITE_BACKEND_URL + `/posts/${id}`, { method: "GET" });
  const data = await response.json();

  return view(data.post);
}

export async function getPosts() {
  const response = await fetch(VITE_BACKEND_URL + "/posts", { method: "GET" });
  const data = await response.json();

  return data.map(view).sort((p1, p2) => p2.created - p1.created);
}

export async function updatePost(id, payload) {
  await fetch(VITE_BACKEND_URL + `/posts/${id}`, {
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
    method: "PUT",
  });
}

function view(post) {
  return { ...post, name: "React", image: reactLogo };
}