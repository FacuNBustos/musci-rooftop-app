import axios from 'axios';

const searchMusic = async (query) => {

    try{
        const response = await axios.get(`https://musicbrainz.org/ws/2/recording?fmt=json&query=${query}`);
        return response.data;

    }catch (error) {
        
        return false;
    };
};

export default searchMusic;