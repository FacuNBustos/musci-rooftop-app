<template>
    <div class="flex flex-col h-screen w-screen bg-gray-200/25">

        <nav class="w-full h-[100px] flex flex-row justify-center items-center mb-3 absolute top-1">

            <img class="mr-[40px] h-[50px] absolute left-[50px] hover:cursor-pointer" src="../assets/loogo.svg.png" @click="handleClickLogo"/>

            <div class="flex flex-row rounded-full
            hover:bg-gray-200">
                <button class="flex justify-center items-center h-[45px] w-[45px]  border-y border-l border-gray-400 rounded-l-full
                    hover:bg-gray-300
                    active:bg-gray-400"
                    @click="handleSubmit">

                    <img class="w-[25px] p-1 m-1 fill-blue-500" src="../assets/lupa.svg" />
                </button>

                <input type="text" id='musicLyric'
                    class="text-center text-xl w-[500px] h-[45px] border-y border-r border-gray-400 rounded-r-full outline-none bg-white/0 font-roboto text-gray-800"
                    placeholder="Búsqueda" 
                    @keydown="handlePressEnter"/>
            </div>

        </nav>

        <div class="flex flex-col items-center w-full h-[91vh] pt-[95px]">

            <div class="flex w-[98vw] justify-start" v-if="$store.state.lyrics">
                <label class="text-sm font-roboto text-gray-500">La busqueda "{{$store.state.search}}" obtuvo {{$store.state.lyrics.recordings.length}} resutados.</label>
            </div>
            <div class="w-full border-t border-gray-300 mb-1" v-if="$store.state.lyrics"></div>

            <div class="w-full h-full flex-grow overflow-auto">

                <CardLyric v-for="elem in $store.state.lyrics.recordings" :lyric='elem' v-if="$store.state.lyrics"/>
        
            </div>
            
        </div>

        <FooterView />
        <LyricView v-if="$store.state.helper"/>
        
    </div>
</template>

<script setup>
import filtroSearch from "../services/filtroSearch.service";
import searchMusic from "../services/music.service";
import store from "../store";
import FooterView from "../components/FooterView.vue";
import CardLyric from "../components/SongView/CardLyric.vue";
import router from "../router";
import LyricView from "../components/LyricView.vue";

const handleSubmit = () => {
    store.dispatch('handleChangeLyric', null);
    
    const music = document.querySelector('#musicLyric').value;
    const query = filtroSearch(music);

    if (query) {
        try{
            store.dispatch('handeChangeSearch', query);
            searchMusic(query)
                .then(response => store.dispatch('handleChangeLyric', response));
        }catch (error) {
            alert('Error');
        };
    }
};

const handlePressEnter = (e) => {
    if (e.key == 'Enter'){
        handleSubmit();
    };
};

const handleClickLogo = () => {
    router.push('/');
}

</script>
