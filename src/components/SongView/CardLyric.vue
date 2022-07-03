
<template>
    <div class="flex justify-center items-center w-full h-[100px] mt-1 ">
        <div class="flex flex-col justify-center w-[45%] h-full border-b-2 p-1">
            <div class="flex gap-4 pl-4">
                <label class="font-roboto"><span class="text-sm text-gray-500">Cancion:</span> {{lyric.title}}</label>
                <label class="font-roboto"><span class="text-sm text-gray-500">Artista:</span> {{lyric['artist-credit'][0].name}}</label>
            </div>
            <div class="flex gap-4 pl-4">
                <label class="font-roboto"><span class="text-sm text-gray-500">Duracion:</span> {{getTime()}}</label>
                <label class="font-roboto"><span class="text-sm text-gray-500">Musicaly score:</span> {{lyric.score}}</label>
            </div>

        </div>
        <div class="flex justify-end items-start w-[45%] h-full border-b-2">
            <button class="hover:bg-gray-200 rounded-xl
            active:bg-gray-300"
            @click="this.handleSubmit()">
                <img src="../../assets/lyrics_logo.svg" class="w-[25px] h-[25px] m-2"/>
            </button>
        </div>
    </div>
</template>

<script>
import getLyric from "../../services/getLyric.service";
import transformTime from "../../services/transformTime.service"
import store from "../../store";

export default {
    props: {
        lyric: {
            type: Object,
            default: () => {},
            required: true
        }
    },
    methods: {
        getTime() {
            return transformTime(this.lyric.length);
        },
        handleSubmit() {
            getLyric(this.lyric['artist-credit'][0].name, this.lyric.title)
            .then(response => store.dispatch('handleChangeLetter', response));
        }
    }
}

</script>