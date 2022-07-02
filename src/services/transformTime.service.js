
const transformTime = (time) => {
    const minutos = Math.floor((time / 1000) / 60);
    const segundos = (time / 1000) - (minutos * 60 )
    
    return `${minutos}:${segundos.toFixed(0)}`;
    
}

export default transformTime;