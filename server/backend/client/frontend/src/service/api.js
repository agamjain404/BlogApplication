 import axios from "axios";

const URL = 'http://localhost:8000'

 export const createPost = async(post) => {
    try{
     return await axios.post(`${URL}/create`, post);
    }catch(error){
        console.log("Error while creating post", error); 
    }
 }

 export const getAllPosts = async(param) => {
     try {
        let response = await axios.get(`${URL}/posts${param}`);
        return response.data; 
     }catch(error){
         console.log("Error while calling getAllPosts", error);
     }
 }

 export const getPost = async(id) => {
     try {
        let response = await axios.get(`${URL}/post/${id}`);
        return response.data;
     }catch(error){
         console.log("Error while etting single post", error);
     }
 }

 export const updatePost = async(id, post) => {
     try {
         await axios.post(`${URL}/update/${id}`, post);
     }catch (error) {
         console.log("Error while calling update", error);
     }
 }

 export const deletePost = async (id) => {
     try {
         await axios.delete(`${URL}/delete/${id}`);
     }catch(error){
         console.log("Error while calling deletePost", error);
     }
 }

 export const uploadFile = async(data) => {
     try {
        return await axios.post(`${URL}/file/upload`, data);
     }catch(error){
         console.log("Error while uploading the image", error);
     }
 }

 export const newComment = async(data) => {
     try {  
         return await axios.post(`${URL}/comment/new`, data);
     }catch(error){
         console.log("Error while saving new Comment", error);
     }
 }


 export const getComments = async(id) => {
     try {  
         let response = await axios.get(`${URL}/comment/${id}`);
         return response.data;
     }catch(error){
         console.log("Error while get  Comment", error);
     }
 }

 export const deleteComment = async(id) => {
     try {
         return await axios.delete(`${URL}/comment/delete/${id}`);
     }catch(error){
         console.log("Error calling deletecomment", error);
     }
 }