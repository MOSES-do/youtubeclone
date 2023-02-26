
import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


const options = {
    url: BASE_URL,
    params: {
        maxResults: 50,
    },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_REACT_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
};

export const fetchFromAPI = async (url) => {

    const { data } = await axios.get(`${BASE_URL}/${url}`, options).
        catch(function (error) {
            if (error.response) {
                console.log(error.response.data)
                console.log(error.response.status)
                console.log(error.response.headers)
            } else if (error.request) {
                console.log(error.request)
            } else {
                console.log('Error', error.message)
            }
            console.log(error.config)

        })
    return data;
};

