<template>
  <h1 v-tracking="'message'">
    {{ msg }}
  </h1>

  <n-space vertical>
    <n-card title="表格">
      <n-data-table :columns="columns" :data="data" v-tracking="'table'" />
    </n-card>

    <n-card title="按钮">
      <n-space>
        <n-button v-tracking="'counter'" @click="count++">
          count is {{ count }}
        </n-button>
        <n-tooltip placement="bottom" trigger="click">
          <template #trigger>
            <n-button v-tracking="'tooltip'"> 点击 </n-button>
          </template>
          <span> I wish they all could be California girls </span>
        </n-tooltip>
        <n-popselect
          v-model:value="value"
          :options="options"
          size="medium"
          scrollable
        >
          <n-button v-tracking="'popselect'">
            {{ value || "Popselect" }}
          </n-button>
        </n-popselect>
      </n-space>
    </n-card>

    <n-card title="折叠面板">
      <n-collapse v-tracking="'collapse'">
        <n-collapse-item title="青铜" name="1">
          <div v-tracking="'collapse-item-1'">可以</div>
        </n-collapse-item>
        <n-collapse-item title="白银" name="2">
          <div v-tracking="'collapse-item-2'">很好</div>
        </n-collapse-item>
        <n-collapse-item title="黄金" name="3">
          <div v-tracking="'collapse-item-3'">真棒</div>
        </n-collapse-item>
      </n-collapse>
    </n-card>
  </n-space>
</template>

<script setup lang="ts">
import { ref, h } from "vue"
import { NButton } from "naive-ui"
import type { DataTableColumns } from "naive-ui"

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

type Song = {
  no: number
  title: string
  length: string
}

const createColumns = ({
  play,
}: {
  play: (row: Song) => void
}): DataTableColumns<Song> => {
  return [
    {
      title: "No",
      key: "no",
    },
    {
      title: "Title",
      key: "title",
    },
    {
      title: "Length",
      key: "length",
    },
    {
      title: "Action",
      key: "actions",
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: "small",
            onClick: () => play(row),
          },
          { default: () => "Play" }
        )
      },
    },
  ]
}

const columns = createColumns({
  play(row: Song) {
    console.log(row)
  },
})

const data: Song[] = [
  { no: 3, title: "Wonderwall", length: "4:18" },
  { no: 4, title: "Don't Look Back in Anger", length: "4:48" },
  { no: 12, title: "Champagne Supernova", length: "7:27" },
]
</script>
