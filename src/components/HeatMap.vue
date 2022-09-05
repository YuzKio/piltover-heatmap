<template>
  <div id="heatmap-container">
    <div id="heatmap"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import h337 from "heatmap.js"

const heatmapInstance = ref()
onMounted(() => {
  heatmapInstance.value = h337.create({
    container: document.getElementById("heatmap")!,
    radius: 10,
    maxOpacity: 0.5,
    minOpacity: 0,
    blur: 0.75,
  })
})

// TODO: Add a function to get and process the heatmap data

// TODO: Add a function to update the heatmap data
</script>
