<template>
  <div class="page-container">
    <HeatMap v-if="active" @close="active = false" />
    <n-switch
      v-tracking="{ id: 'switch' }"
      class="heatmap-switch"
      v-model:value="active"
    >
      <template #unchecked> 开启热力图 </template>
    </n-switch>
    <div style="margin: 300px 0">
      <div style="display: flex; justify-content: center">
        <img
          src="../../assets/piltover.svg"
          class="logo"
          alt="Vue logo"
          v-tracking="{ id: 'logo' }"
        />
      </div>

      <section style="text-align: center">
        <n-space style="display: flex; justify-content: center; margin: 60px">
          <n-button @click="count1++" v-tracking="{ id: 'page-button-1' }">
            count1 is {{ count1 }}
          </n-button>
          <n-button @click="count2++" v-tracking="{ id: 'page-button-2' }">
            count2 is {{ count2 }}
          </n-button>
          <n-button @click="count3++" v-tracking="{ id: 'page-button-3' }">
            count3 is {{ count3 }}
          </n-button>
        </n-space>
        <n-button @click="router.push('/')"> 返回首页 </n-button>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router"
import { ref } from "vue"
import HeatMap from "../../components/Heatmap/index.vue"

const router = useRouter()
const count1 = ref(0)
const count2 = ref(0)
const count3 = ref(0)

const active = ref(false)
</script>

<style scoped lang="scss">
.page-container {
  margin: 20px;
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
