<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <n-space>
      <n-button
        @click="($event: any) => {
          count ++
          clickX = $event.clientX
          clickY = $event.clientY
          handlePointerInfo('counter')
        }"
        id="counter"
      >
        count is {{ count }}
      </n-button>
      <n-tooltip placement="bottom" trigger="click">
        <template #trigger>
          <n-button> 点击 </n-button>
        </template>
        <span> I wish they all could be California girls </span>
      </n-tooltip>
      <n-popselect
        v-model:value="value"
        :options="options"
        size="medium"
        scrollable
      >
        <n-button style="margin-right: 8px">
          {{ value || 'Popselect' }}
        </n-button>
      </n-popselect>
    </n-space>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
const value = ref('Drive My Car')
const options = [
  {
    label: 'Drive My Car',
    value: 'Drive My Car'
  },
  {
    label: 'Norwegian Wood',
    value: 'Norwegian Wood'
  },
  {
    label: "You Won't See",
    value: "You Won't See",
    disabled: true
  },
  {
    label: 'Nowhere Man',
    value: 'Nowhere Man'
  },
  {
    label: 'Think For Yourself',
    value: 'Think For Yourself'
  },
  {
    label: 'The Word',
    value: 'The Word'
  },
  {
    label: 'Michelle',
    value: 'Michelle',
    disabled: true
  },
  {
    label: 'What goes on',
    value: 'What goes on'
  },
  {
    label: 'Girl',
    value: 'Girl'
  },
  {
    label: "I'm looking through you",
    value: "I'm looking through you"
  },
  {
    label: 'In My Life',
    value: 'In My Life'
  },
  {
    label: 'Wait',
    value: 'Wait'
  }
]

const clickX = ref(0)
const clickY = ref(0)

const handlePointerInfo = (id: string) => {
  const clickDom = document.getElementById(id)
  const x = clickDom?.getBoundingClientRect().left
  const y = clickDom?.getBoundingClientRect().top
  const data = {
    dom: id,
    clickx: clickX.value - x!,
    clicky: clickY.value - y!,
  }
  webfunnyEvent(5).trackEvent(data)
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
