import axios from 'axios';

// const url = "https://saveyourmemories.herokuapp.com/posts";
const url= "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const createPosts = (newPost) => axios.post(url,newPost);
export const updatePost = (id,updatedPost) => axios.patch(`${url}/${id}`,updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);