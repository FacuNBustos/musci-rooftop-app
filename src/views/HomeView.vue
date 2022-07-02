<template>
    <div class="flex flex-col h-screen w-screen bg-gray-200/25">

        <main class="flex flex-col justify-center items-center w-screen h-screen">
            <div class="flex flex-col justify-center items-center gap-4 w-[500px] h-[500px]">

                <img class="w-[300px] mb-3" src="../assets/loogo.svg.png"/>

                <div class="flex justify-center items-center">

                    <input type="text" class="text-center text-xl w-[400px] h-[40px] border-y border-l border-gray-400 rounded-l-lg"  placeholder="Búsqueda"/>
                    <button class="h-full  border-y border-r border-gray-400 rounded-r-lg
                    hover:bg-gray-200
                    active:bg-gray-400">
                    <img class="w-[25px] p-1 fill-blue-500" src="../assets/lupa.svg"/>
                    </button>

                </div>

            </div>
        </main>

        <FooterView />
        
    </div>

</template>

<script setup>
import FooterView from './FooterView.vue';
import LetraView from './LetraView.vue';
    // <input type="text" id="name" name="name" required class="text-center pr-[200px] pt-3 border border-black">

    // <img class="w-[20%] " src="../assets/logo.gif">
</script>
