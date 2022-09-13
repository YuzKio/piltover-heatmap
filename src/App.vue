<template>
  <HeatMap v-if="active" @close="active = false" />
  <n-switch
    v-model:value="active"
    id="switch"
    @click="($event: any) => handleDataReport($event, 'switch')"
  >
    <template #unchecked> 开启热力图 </template>
  </n-switch>
  <section>
    <img
      src="./assets/vue.svg"
      class="logo"
      alt="Vue logo"
      id="logo"
      @click="($event: any) => handleDataReport($event, 'logo')"
    />
    <TestFunction msg="Test Function" />
  </section>
</template>

<script setup lang="ts">
import TestFunction from "./components/TestFunction.vue"
import HeatMap from "./components/HeatMap.vue"
import { ref } from "vue"
import { handleDataReport } from "./components/utils/tracking"

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
#switch {
  position: absolute;
  top: 10px;
  left: 10px;
}
</style>
