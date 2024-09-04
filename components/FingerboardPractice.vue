<!-- eslint-disable vue/comma-dangle -->
<script lang="ts" setup>
import { ref } from 'vue'
import { ElButton } from 'element-plus'
import 'element-plus/theme-chalk/el-button.css'

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
  { pos: [5, 5], unit: 'D' },
  { pos: [10, 6], unit: 'D' },

  { pos: [0, 1], unit: 'E' },
  { pos: [5, 2], unit: 'E' },
  { pos: [9, 3], unit: 'E' },
  { pos: [2, 4], unit: 'E' },
  { pos: [7, 5], unit: 'E' },
  { pos: [0, 6], unit: 'E' },

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
  { pos: [12, 3], unit: 'G' },
  { pos: [3, 4], unit: 'G' },
  { pos: [8, 5], unit: 'G' },
  { pos: [1, 6], unit: 'G' },

  { pos: [5, 1], unit: 'A' },
  { pos: [10, 2], unit: 'A' },
  { pos: [2, 3], unit: 'A' },
  { pos: [7, 4], unit: 'A' },
  { pos: [12, 5], unit: 'A' },
  { pos: [5, 6], unit: 'A' },

  { pos: [7, 1], unit: 'B' },
  { pos: [12, 2], unit: 'B' },
  { pos: [4, 3], unit: 'B' },
  { pos: [9, 4], unit: 'B' },
  { pos: [2, 5], unit: 'B' },
  { pos: [7, 6], unit: 'B' },

]

const calls: Record<string, string> = {
  C: 'do',
  D: 're',
  E: 'mi',
  F: 'fa',
  G: 'sol',
  A: 'la',
  B: 'si',
}

const numbers: Record<string, number> = {
  C: 1,
  D: 2,
  E: 3,
  F: 4,
  G: 5,
  A: 6,
  B: 7,
}

const type = ref<'number' | 'call'>()
const colors: Record<string, string> = {
  C: '#97a791',
  D: '#ddbb99',
  E: '#8491c3',
  F: '#a69425',
  G: '#fbca4d',
  A: '#89c3eb',
  B: '#f0908d',
}

const notes = ref<typeof musicalNotes>([])

const line = ref(Math.floor(Math.random() * 7))
const buttons = ref(randomButtons())
const fixed = ref(false)

function randomButtons() {
  return uniqueRandomNumbers()
    .map(index => Object.keys(colors)[index])
    .map(key => ({ note: key, color: colors[key] }))
}

function onShow() {
  if (notes.value.length) {
    notes.value = []
  }
  else {
    notes.value = [...musicalNotes
      .filter(m => buttons.value.map(v => v.note)
        .includes(m.unit) && m.pos[1] === line.value)]
  }
}

function random() {
  notes.value = []
  buttons.value = randomButtons()
  if (!fixed.value)
    line.value = Math.floor(Math.random() * 6) + 1
}

function uniqueRandomNumbers() {
  const numbers: number[] = []
  const length = Math.max(Math.floor(Math.random() * 8), 3)
  while (numbers.length < length) {
    const randomNumber = Math.floor(Math.random() * 7)
    if (!numbers.includes(randomNumber))
      numbers.push(randomNumber)
  }
  return numbers
}
</script>

<template>
  <div>
    <h2>随机挑战</h2>
    <div class="flex items-center gap-12px">
      <ElButton type="text" @click="random">
        <div class="i-material-symbols-sync" />
      </ElButton>
      <span>找到第 {{ line }} 弦的</span>
      <div class="flex items-center">
        <ElButton v-for="item in buttons" :key="item.note" size="small" :color="item.color">
          <span class="text-white">
            <template v-if="type === 'call'">
              {{ calls[item.note] }}
            </template>
            <template v-if="type === 'number'">
              {{ numbers[item.note] }}
            </template>
            <template v-if="!type">
              {{ item.note }}
            </template>
          </span>
        </ElButton>
      </div>
      <div>|</div>
      <div>
        <ElButton size="small" round>
          <div class="i-fluent-eye-show-12-filled" @click="onShow" />
        </ElButton>
        <ElButton size="small" round @click="type = 'call'">
          唱名
        </ElButton>
        <ElButton size="small" round @click="type = undefined">
          音名
        </ElButton>
        <ElButton size="small" round @click="type = 'number'">
          数字
        </ElButton>
        <ElButton size="small" type="info" :color="fixed && '#fce2c4' || undefined" round @click="fixed = !fixed">
          <span class="mr-4px">固定 {{ line }} 弦</span>
          <div v-if="fixed" class="i-material-symbols-location-searching-rounded" />
          <div v-else class="i-material-symbols-location-on-rounded" />
        </ElButton>
      </div>
    </div>

    <GuitarFingerboard v-model:notes="notes" class="my-24px" />

    <h2>找大三</h2>
    TODO...

    <h2>找小三</h2>
    TODO...
  </div>
</template>

<style lang="scss" scoped></style>
