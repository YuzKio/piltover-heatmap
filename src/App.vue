<template>
  <n-switch v-model:value="active">
    <template #checked> 关闭热力图 </template>
    <template #unchecked> 开启热力图 </template>
  </n-switch>
  <div>
    <img src="./assets/vue.svg" class="logo" alt="Vue logo" />
    <TestFunction msg="Test Function" />
  </div>
</template>

<script setup lang="ts">
import TestFunction from "./components/TestFunction.vue"
import { ref } from "vue"

const active = ref(false)
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
</style>
