
<template>
    <div class="flex justify-between items-center w-[80%] h-[50px] bg-gray-300/50 shadow shadow-gray-400 mt-3 pr-[50px] pl-[50px] text-lg rounded">
        <div class="flex justify-center items-center text-center w-[33%] h-full">
            <label>{{this.lyric.title}}</label>
        </div>
        <div class="flex justify-center items-center text-center w-[33%] h-full">
            <label>{{this.lyric['artist-credit'][0].name}}</label>
        </div>
        <div class="flex justify-center items-center text-center w-[33%] h-full">
            <label>{{getTime()}}</label>
        </div>
    </div>
</template>

<script>
import transformTime from "../../services/transformTime.service"

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
        }
    }
}

</script>