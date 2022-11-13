<script lang="ts">
import { ref } from 'vue'



// 传统做法
export default {
    setup() {
        let num01 = ref(100);

        const add = () => {
            num01.value++;
        }

        const minus = () => {
            num01.value--;
        }

        return {
            num01,
            add,
            minus
        }
    }
}

</script>

<template>
    <h1>My first element!</h1>
    <h2>{{ num01 }}</h2>
    <button @click="minus">减少</button>
    <button @click="add">增加</button>
</template>

<style>
h1 {
    color: red;
}
</style>

