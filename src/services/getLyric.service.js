import axios from 'axios';

const searchMusic = async (artista, title) => {

    try{
        const response = await axios.get(`https://api.lyrics.ovh/v1/${artista}/${title}`);
        return response.data;

    }catch (error) {
        
        return false;
    };
};

export default searchMusic;