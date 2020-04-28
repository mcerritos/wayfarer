import axios from 'axios';

const REACT_APP_API_URL = "http://localhost:3000/api/v1/cities";

class CityModel {
    static all = () => {
        let request = axios.get(`${REACT_APP_API_URL}`);
        return request;
    };

    static getCity = (cityId) => {
        let request = axios.get(`${REACT_APP_API_URL}/${cityId}`);
        return request;
    }

};

export default CityModel;