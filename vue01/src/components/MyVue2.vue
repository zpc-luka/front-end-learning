<script lang="ts" setup>
import { ref } from 'vue'

let num01 = ref(100);

const add = () => {
    num01.value++;
}

const minus = () => num01.value--;

</script>

<template>
    <h1>My first element!</h1>
    <h2>{{ num01 }}</h2>
    <button @click="minus">减少</button>
    <button @click="add">增加</button>
</template>

<style scoped>
    h1 {
        color: red;
    }
</style>