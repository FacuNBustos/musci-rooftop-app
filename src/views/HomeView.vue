<template>
    <div class="flex flex-col h-screen w-screen bg-gray-200/25">

        <main class="flex flex-col justify-center items-center w-screen h-screen">
            <div class="flex flex-col justify-center items-center gap-4 w-[500px] h-[500px]">

                <img class="w-[300px] mb-3" src="../assets/loogo.svg.png"/>

                <div class="flex justify-center items-center">

                    <input type="text" id='musicLyric' class="text-center text-xl w-[400px] h-[40px] border-y border-l border-gray-400 rounded-l-lg"  placeholder="Búsqueda"/>

                    <button class="h-full  border-y border-r p-1 border-gray-400 rounded-r-lg
                    hover:bg-gray-200
                    active:bg-gray-400"
                    @click="handleSubmit">
                        <img class="w-[25px] p-1 fill-blue-500" src="../assets/lupa.svg"/>
                    </button>

                </div>

            </div>
        </main>

        <FooterView />

    </div>

</template>

<script setup>
import FooterView from '../components/FooterView.vue';
import filtroSearch from '../services/filtroSearch.service';
import searchMusic from '../services/music.service';
import store from '../store';

const handleSubmit = () => {

    const music = document.querySelector('#musicLyric').value;
    const query = filtroSearch(music);

    if (query) {

        try{
            searchMusic(query)
                .then(response => store.dispatch('handleChangeLyric', response));

        }catch (error) {
            alert('Error')
        };

    }
};

</script>
