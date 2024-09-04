<!-- eslint-disable vue/comma-dangle -->
<script lang="ts" setup>
import { useElementSize, useVModel } from '@vueuse/core'
import { computed, ref } from 'vue'
import { ElButton } from 'element-plus'
import 'element-plus/theme-chalk/el-button.css'

const props = defineProps<{
  notes: {
    pos: number[]
    unit?: string
    text?: string
  }[]
  controls?: boolean
}>()

const contentRef = ref()

const { width, height } = useElementSize(contentRef)

function tw(num: number) {
  const block = (width.value / 12)
  return (num * block) + (block / 2)
}
function th(num: number) {
  const block = (height.value / 5)
  return (num * block)
}
function tl(x: number, y: number) {
  const left = x === 0 ? tw(x) - tw(0) : tw(x - 1)
  return {
    left: `${left - 20}px`,
    top: `${th(y) - th(1) - 10}px`,
  }
}

const musicalNotes = [
  { pos: [8, 1], unit: 'C' },
  { pos: [1, 2], unit: 'C' },
  { pos: [5, 3], unit: 'C' },
  { pos: [10, 4], unit: 'C' },
  { pos: [3, 5], unit: 'C' },
  { pos: [8, 6], unit: 'C' },

  { pos: [10, 1], unit: 'D' },
  { pos: [3, 2], unit: 'D' },
  { pos: [7, 3], unit: 'D' },
  { pos: [0, 4], unit: 'D' },
  { pos: [12, 4], unit: 'D' },
  { pos: [5, 5], unit: 'D' },
  { pos: [10, 6], unit: 'D' },

  { pos: [0, 1], unit: 'E' },
  { pos: [5, 2], unit: 'E' },
  { pos: [9, 3], unit: 'E' },
  { pos: [2, 4], unit: 'E' },
  { pos: [7, 5], unit: 'E' },
  { pos: [0, 6], unit: 'E' },
  { pos: [12, 1], unit: 'E' },
  { pos: [12, 6], unit: 'E' },

  { pos: [1, 1], unit: 'F' },
  { pos: [6, 2], unit: 'F' },
  { pos: [10, 3], unit: 'F' },
  { pos: [3, 4], unit: 'F' },
  { pos: [8, 5], unit: 'F' },
  { pos: [1, 6], unit: 'F' },

  { pos: [1, 1], unit: 'F' },
  { pos: [6, 2], unit: 'F' },
  { pos: [10, 3], unit: 'F' },
  { pos: [3, 4], unit: 'F' },
  { pos: [8, 5], unit: 'F' },
  { pos: [1, 6], unit: 'F' },

  { pos: [3, 1], unit: 'G' },
  { pos: [8, 2], unit: 'G' },
  { pos: [0, 3], unit: 'G' },
  { pos: [12, 3], unit: 'G' },
  { pos: [5, 4], unit: 'G' },
  { pos: [10, 5], unit: 'G' },
  { pos: [3, 6], unit: 'G' },

  { pos: [5, 1], unit: 'A' },
  { pos: [10, 2], unit: 'A' },
  { pos: [2, 3], unit: 'A' },
  { pos: [7, 4], unit: 'A' },
  { pos: [0, 5], unit: 'A' },
  { pos: [12, 5], unit: 'A' },
  { pos: [5, 6], unit: 'A' },

  { pos: [7, 1], unit: 'B' },
  { pos: [0, 2], unit: 'B' },
  { pos: [12, 2], unit: 'B' },
  { pos: [4, 3], unit: 'B' },
  { pos: [9, 4], unit: 'B' },
  { pos: [2, 5], unit: 'B' },
  { pos: [7, 6], unit: 'B' },

]
const colors: Record<string, string> = {
  C: '#97a791',
  D: '#ddbb99',
  E: '#8491c3',
  F: '#a69425',
  G: '#fbca4d',
  A: '#89c3eb',
  B: '#f0908d',
}

const notes = useVModel(props, 'notes', undefined, { passive: true, defaultValue: musicalNotes })
const showNotes = computed(() => musicalNotes
  .filter(n => notes.value.some(ns => compare(n, ns)))
  .map(n => ({ ...n, ...notes.value.find(ns => compare(n, ns)) })),
)

function compare(a: any, b: any) {
  return a.pos[0] === b.pos[0] && a.pos[1] === b.pos[1]
}

function filter(key?: string) {
  if (!key)
    notes.value = [...musicalNotes]
  else
    notes.value = musicalNotes.filter(m => m.unit === key)
}
</script>

<template>
  <div class="w-full">
    <div class="w-full py12px px24px lt-2xl:pb-24px overflow-auto">
      <div ref="contentRef" class="min-w-1200px relative">
        <div class="flex flex-col gap-36px">
          <div class="border-t border-1px" />
          <div class="border-t border-1px" />
          <div class="border-t border-1px" />
          <div class="border-t border-1px" />
          <div class="border-t border-1px" />
          <div class="border-t border-1px" />
        </div>
        <div class="w-full h-full absolute top-0 flex justify-between">
          <div class="border-l border-1px h-full w-1px" />
          <div class="border-l border-1px h-full w-1px" />
          <div class="border-l border-1px h-full w-1px" />
          <div class="border-l border-1px h-full w-1px" />
          <div class="border-l border-1px h-full w-1px" />
          <div class="border-l border-1px h-full w-1px" />
          <div class="border-l border-1px h-full w-1px" />
          <div class="border-l border-1px h-full w-1px" />
          <div class="border-l border-1px h-full w-1px" />
          <div class="border-l border-1px h-full w-1px" />
          <div class="border-l border-1px h-full w-1px" />
          <div class="border-l border-1px h-full w-1px" />
          <div class="border-l border-1px h-full w-1px" />
        </div>
        <div
          v-for="(item, index) in showNotes" :key="index"
          class="absolute w-40px h-20px rounded-full text-12px flex-center z-1"
          :style="[tl(item.pos[0], item.pos[1]), { background: colors[item.unit] }]"
        >
          {{ item.text || item.unit }}
        </div>
        <div>
          <div
            class="absolute w-14px h-14px rounded-full bg-[#fff]"
            :style="{ left: `${tw(2) - 8}px`, top: `${th(3) - th(1) + 12}px` }"
          />
          <div
            class="absolute w-14px h-14px rounded-full bg-[#fff]"
            :style="{ left: `${tw(4) - 8}px`, top: `${th(3) - th(1) + 12}px` }"
          />
          <div
            class="absolute w-14px h-14px rounded-full bg-[#fff]"
            :style="{ left: `${tw(6) - 8}px`, top: `${th(3) - th(1) + 12}px` }"
          />
          <div
            class="absolute w-14px h-14px rounded-full bg-[#fff]"
            :style="{ left: `${tw(8) - 8}px`, top: `${th(3) - th(1) + 12}px` }"
          />
          <div
            class="absolute w-14px h-14px rounded-full bg-[#fff]"
            :style="{ left: `${tw(11) - 8}px`, top: `${th(2) - th(1) + 12}px` }"
          />
          <div
            class="absolute w-14px h-14px rounded-full bg-[#fff]"
            :style="{ left: `${tw(11) - 8}px`, top: `${th(4) - th(1) + 12}px` }"
          />
        </div>
      </div>
    </div>
    <div v-if="controls" class="flex gap-12px mt-48px">
      <ElButton type="info" @click="filter()">
        显示全部
      </ElButton>
      <ElButton type="info" @click="notes = []">
        隐藏
      </ElButton>
      <ElButton v-for="item in Object.keys(colors)" :key="item" :color="colors[item]" @click="filter(item)">
        <span class="text-white">{{ item }}</span>
      </ElButton>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
