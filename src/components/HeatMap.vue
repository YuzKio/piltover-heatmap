<template>
  <div id="heatmap-container">
    <n-button class="close-button" type="primary" @click="$emit('close')">
      关闭
    </n-button>
    <div id="heatmap"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import h337 from "heatmap.js"
import { getPointerData } from "./utils/tracking"

defineEmits<{
  (e: "close"): void
}>()

const heatmapInstance = ref()
onMounted(async () => {
  heatmapInstance.value = h337.create({
    container: document.getElementById("heatmap")!,
    radius: 20,
    maxOpacity: 0.5,
    minOpacity: 0,
    blur: 0.75,
  })

  const pointerData = await getPointerData()
  heatmapInstance.value.addData(pointerData)
})
</script>

<style lang="scss" scoped>
#heatmap-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  #heatmap {
    flex: 1;
  }
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 100;
}
</style>
