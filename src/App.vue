<template>
  <div class="demo-container">
    <n-switch
      class="heatmap-switch"
      v-model:value="active"
      id="switch"
      @click="($event: any) => handleDataReport($event, 'switch')"
    >
      <template #unchecked> 开启热力图 </template>
    </n-switch>
    <HeatMap v-if="active" @close="active = false" />
    <section>
      <div style="display: flex; justify-content: center">
        <img
          src="./assets/piltover.svg"
          class="logo"
          alt="Vue logo"
          id="logo"
          @click="($event: any) => handleDataReport($event, 'logo')"
        />
      </div>
      <TestFunction msg="Test Function" />
    </section>
  </div>
</template>

<script setup lang="ts">
import TestFunction from "./components/TestFunction.vue"
import HeatMap from "./components/HeatMap.vue"
import { ref } from "vue"
import { handleDataReport } from "./components/utils/tracking"

const active = ref(false)
</script>

<style scoped lang="scss">
.demo-container {
  margin: 40px;
  .heatmap-switch {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 1;
  }
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
}
</style>
