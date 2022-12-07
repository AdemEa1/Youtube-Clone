import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    method: 'GET',
    params: { maxResults: '50' },
    headers: {
      'X-RapidAPI-Key': '518ec3fe97msh6546f5f18a32af7p162fd8jsn36108e36531e',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };  