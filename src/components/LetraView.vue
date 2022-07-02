<template>
    <div class="w-screen h-screen  absolute flex justify-center">
        <div class="text-center p-4 w-[700px] h-screen bg-gray-100 drop-shadow-2xl">
            <h1 class="text-lg text-gray-700">
                {{this.lyric}}
            </h1>
        </div>
    </div>
</template>


<script>
export default{
    props: {
        lyric: {
            type: String,
            default: '',
            required: true
        }
    }
}

</script>