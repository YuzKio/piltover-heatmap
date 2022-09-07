<template>
  <h1
    id="message"
    @click="($event: any) => handleDataReport($event, 'message')"
  >
    {{ msg }}
  </h1>

  <div>
    <n-data-table
      :columns="columns"
      :data="[]"
      style="width: 1000px; height: 800px"
      id="table"
      @click="($event: any) => handleDataReport($event, 'table')"
    />
  </div>

  <div class="card">
    <n-space>
      <n-button
        id="counter"
        @click="($event: any) => {
          count ++
          handleDataReport($event, 'counter')
        }"
      >
        count is {{ count }}
      </n-button>
      <n-tooltip placement="bottom" trigger="click">
        <template #trigger>
          <n-button
            id="tooltip"
            @click="($event: any) => handleDataReport($event, 'tooltip')"
          >
            点击
          </n-button>
        </template>
        <span> I wish they all could be California girls </span>
      </n-tooltip>
      <n-popselect
        v-model:value="value"
        :options="options"
        size="medium"
        scrollable
      >
        <n-button
          id="popselect"
          @click="($event: any) => handleDataReport($event, 'popselect')"
        >
          {{ value || "Popselect" }}
        </n-button>
      </n-popselect>
    </n-space>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { handleDataReport } from "./utils/tracking"

defineProps<{ msg: string }>()

const count = ref(0)
const value = ref("Drive My Car")
const options = [
  {
    label: "Drive My Car",
    value: "Drive My Car",
  },
  {
    label: "Norwegian Wood",
    value: "Norwegian Wood",
  },
  {
    label: "You Won't See",
    value: "You Won't See",
    disabled: true,
  },
  {
    label: "Nowhere Man",
    value: "Nowhere Man",
  },
  {
    label: "Think For Yourself",
    value: "Think For Yourself",
  },
  {
    label: "The Word",
    value: "The Word",
  },
  {
    label: "Michelle",
    value: "Michelle",
    disabled: true,
  },
  {
    label: "What goes on",
    value: "What goes on",
  },
  {
    label: "Girl",
    value: "Girl",
  },
  {
    label: "I'm looking through you",
    value: "I'm looking through you",
  },
  {
    label: "In My Life",
    value: "In My Life",
  },
  {
    label: "Wait",
    value: "Wait",
  },
]

const columns = [
  {
    title: "Name",
    key: "name",
  },
  {
    title: "Age",
    key: "age",
  },
  {
    title: "Address",
    key: "address",
  },
]
</script>
