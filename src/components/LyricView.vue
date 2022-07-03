<template>
    <div class="flex justify-end absolute w-screen h-screen">
        <div class="flex w-full h-full bg-gray-200/50"
        @click="handleClick()">

        </div>
        <div class="flex flex-col items-center w-[700px] h-full bg-white border-l-2 border-gray-300 shadow shadow-gray-300 pt-3 pl-4 pr-4">
            <label class="text-xl fotn-roboto">Letra de a cancion</label>

            <div class="w-full border-b border-gray-200 mt-4 mb-4"></div>

            <p class="text-center font-roboto">{{(this.$store.state.lyricLetter.lyrics) ? this.$store.state.lyricLetter.lyrics : 'No se a podido encontrar la letra.'}}</p>

        </div>
    </div>
</template>


<script>
import store from "../store"

export default{
    methods: {
        handleClick() {
            store.dispatch('handleChangeHelper');
        }
    }
}

</script>