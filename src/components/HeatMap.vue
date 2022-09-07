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
  const heatmapContainerElement = document.getElementById("heatmap-container")
  const documentElement = document.documentElement
  heatmapContainerElement!.style.width = documentElement.scrollWidth + "px"
  heatmapContainerElement!.style.height = documentElement.scrollHeight + "px"

  heatmapInstance.value = h337.create({
    container: document.getElementById("heatmap")!,
    radius: 20,
    maxOpacity: 0.5,
    minOpacity: 0,
    blur: 0.75,
  })
  const start = Date.now()
  const pointerData = await getPointerData()
  heatmapInstance.value.addData(pointerData)
  const end = Date.now()
  console.log("heatmap data loaded in", end - start, "ms")
})
</script>

<style lang="scss" scoped>
#heatmap-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  #heatmap {
    flex: 1;
  }
}

.close-button {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 100;
}
</style>
