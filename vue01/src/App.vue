<script setup lang="ts">
import MyVue2 from './components/MyVue2.vue'
import FormVue from './components/FormVue.vue'
</script>

<template>
    <el-menu mode="horizontal"
    class="el-menu-demo">
    <el-menu-item index="1"><router-link to="/myVue2">myVue2</router-link></el-menu-item>
    <el-menu-item index="2"><router-link to="/formVue">formVue</router-link></el-menu-item>
  </el-menu>
  <router-view></router-view>
</template>

<style scoped>

</style>
