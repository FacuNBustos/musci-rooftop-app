<template>
    <div class="flex flex-col h-screen w-screen bg-gray-200/25 pt-3">

        <nav class="w-full h-[100px] flex flex-row justify-center items-center">
            <img class="mr-4 h-[35px]" src="../assets/loogo.svg.png" />
            <input type="text" id='musicLyric'
                class="text-center text-xl w-[400px] h-[40px] border-y border-l border-gray-400 rounded-l-lg"
                placeholder="Búsqueda" />

            <button class="h-[40px]  border-y border-r border-gray-400 rounded-r-lg
                    hover:bg-gray-200
                    active:bg-gray-400"
                    @click="handleSubmit">

                <img class="w-[25px] p-1 m-1 fill-blue-500" src="../assets/lupa.svg" />
            </button>

        </nav>
        <div class="flex flex-col items-center w-full h-screen">

            <div class="w-[80%] border border-gray-300 mt-3"></div>

            <div class="flex justify-between items-center w-[70%] h-12 mt-1 mb-1 pr-[50px] pl-[50px] text-xl">
                <div class="flex justify-center items-center text-center w-[33%] h-full">
                    <label>NOMBRE</label>
                </div>
                <div class="flex justify-center items-center text-center w-[33%] h-full">
                    <label>ARTISTA</label>
                </div>
                <div class="flex justify-center items-center text-center w-[33%] h-full">
                    <label>DURACION</label>
                </div>
            </div>

            <div class="w-[80%] border border-gray-300 mb-1"></div>
            
            
            <div class="flex flex-col w-full h-[700px] mt-1">
                <div class="flex-grow justify-center items-center overflow-auto ml-[320px]" >

                    <CardLyric v-if="this.$store.state.lyrics" v-for="elem in this.$store.state.lyrics.recordings" :lyric='elem'/>
                        
                </div>
            </div>
            
        </div>

        <FooterView />
<LetraView/>
    </div>
</template>

<script setup>
import FooterView from "../components/FooterView.vue";
import CardLyric from "../components/SongView/CardLyric.vue";
import filtroSearch from "../services/filtroSearch.service";
import searchMusic from "../services/music.service";
import store from "../store";

const handleSubmit = () => {
    store.dispatch('handleChangeLyric', null);
    
    const music = document.querySelector('#musicLyric').value;
    const query = filtroSearch(music);

    if (query) {
        try{
            searchMusic(query)
                .then(response => store.dispatch('handleChangeLyric', response));
        }catch (error) {
            alert('Error');
        };
    }
};

</script>
