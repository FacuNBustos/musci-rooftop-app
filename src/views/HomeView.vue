<template>
    <div class="flex flex-col h-screen w-screen bg-[#efefefe]">

        <main class="flex flex-col justify-center items-center w-screen h-screen">
            <div class="flex flex-col justify-center items-center gap-4 w-[500px] h-[500px]">

                <img class="w-[300px] mb-[40px]" src="../assets/loogo.svg.png"/>

                <div class="flex justify-center items-center rounded-full
                hover:bg-gray-200">

                    <button class="flex justify-center items-center h-[50px] w-[50px] border-y border-l p-1 border-gray-400 rounded-l-full
                    hover:bg-gray-200
                    active:bg-gray-300"
                    @click="handleSubmit">
                        <img class="w-[25px] p-1 fill-blue-500" src="../assets/lupa.svg"/>
                    </button>

                    <input type="text" id='musicLyric' 
                    class="text-center text-xl w-[550px] h-[50px] border-y border-r border-gray-400 rounded-r-full bg-white/0 outline-none font-roboto text-gray-800"  
                    placeholder="Búsqueda"
                    @keydown="(e) => handlePressEnter(e)"/>

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
            store.dispatch('handeChangeSearch', query);
            searchMusic(query)
                .then(response => store.dispatch('handleChangeLyric', response));

        }catch (error) {
            alert('Error')
        };

    }
};

const handlePressEnter = (e) => {
    if (e.key == 'Enter'){
        handleSubmit();
    }
}

</script>
