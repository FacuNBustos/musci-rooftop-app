<template>
    <div class="flex flex-col h-screen w-screen bg-gray-200/25">
        <nav class="w-full h-[100px] flex flex-row justify-center items-center">
            <img class="mr-4 h-[35px]" src="../assets/loogo.svg.png" />
            <input type="text"
                class="text-center text-xl w-[400px] h-[40px] border-y border-l border-gray-400 rounded-l-lg"
                placeholder="Búsqueda" />

            <button class="h-[40px]  border-y border-r border-gray-400 rounded-r-lg
                    hover:bg-gray-200
                    active:bg-gray-400">
                <img class="w-[25px] p-1 fill-blue-500" src="../assets/lupa.svg" />
            </button>

        </nav>
        <div class="w-full h-full bg-red-200">

        </div>

        <FooterView />

    </div>
</template>

<script setup>
import FooterView from "./FooterView.vue";

// 

/* 
     


*/
</script>