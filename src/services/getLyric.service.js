import axios from 'axios';

const getLyric = async (artista, title) => {

    try{
        const response = await axios.get(`https://api.lyrics.ovh/v1/${artista}/${title}`);
        return response.data;

    }catch (error) {
        
        return false;
    };
};

export default getLyric;