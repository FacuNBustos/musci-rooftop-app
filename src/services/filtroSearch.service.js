

const filtroSearch = (search) => {
    try{

        const query = search.trim()
            .toLowerCase()
            .split('')
            .filter(function(v) { return (v.charCodeAt(0) >= 48 && v.charCodeAt(0) <= 57) || (v.charCodeAt(0) >= 97 && v.charCodeAt(0) <= 122 ) || v.charCodeAt(0) == 32})
            .join('');

        if (query) {
            return query;
        } else {
            return false;
        }

    }catch (error) {
        
        return false;
    }
}

export default filtroSearch;