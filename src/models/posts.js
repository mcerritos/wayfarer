import axios from 'axios';

const REACT_APP_API_URL = "http://localhost:3000/api/v1";

class PostModel {
    static all = (userId) => {
      let request = axios.get(REACT_APP_API_URL/`${userId}`);
      return request;
    };
  
    static create = (post) => {
        let request = axios.post(REACT_APP_API_URL, post);
        return request;
  
      };
  
    static delete = (post) => {
      let request = axios.delete(`${REACT_APP_API_URL}/${post._id}`);
      return request;
    };
    
    static update = (post) => {
      let request = axios.put(`${REACT_APP_API_URL}/${post._id}`, post);
      return request;
    };
  
  };
  
  export default PostModel;