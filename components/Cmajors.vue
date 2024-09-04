<template>
  <h2>第一把位（五弦 - 食指）</h2>
  <GuitarFingerboard
    :notes="[
      { pos: [3, 5] },
      { pos: [3, 4] },
      { pos: [2, 4] },
      { pos: [0, 4] },
      { pos: [2, 3] },
      { pos: [0, 3] },
      { pos: [3, 2] },
      { pos: [1, 2] },
      { pos: [0, 2] },
      { pos: [3, 1] },
      { pos: [1, 1] },
      { pos: [0, 1] },
    ]"
  />
  <h2>第二把位（五弦 - 中指）</h2>
  <GuitarFingerboard
    :notes="[
      { pos: [3, 5] },
      { pos: [5, 5] },
      { pos: [3, 4] },
      { pos: [2, 4] },
      { pos: [5, 4] },
      { pos: [5, 3] },
      { pos: [4, 3] },
      { pos: [2, 3] },
      { pos: [6, 2] },
      { pos: [5, 2] },
      { pos: [3, 2] },
      { pos: [3, 1] },
      { pos: [5, 1] },
    ]"
  />
  <h2>第三把位（五弦 - 食指）</h2>
  <GuitarFingerboard
    :notes="[
      { pos: [3, 5] },
      { pos: [5, 5] },
      { pos: [7, 5] },
      { pos: [3, 4] },
      { pos: [5, 4] },
      { pos: [7, 4] },
      { pos: [4, 3] },
      { pos: [5, 3] },
      { pos: [7, 3] },
      { pos: [5, 2] },
      { pos: [6, 2] },
      { pos: [8, 2] },
      { pos: [8, 1] },
      { pos: [7, 1] },
      { pos: [5, 1] },
    ]"
  />
  <h2>第五把位（六弦 - 小指）</h2>
  <GuitarFingerboard
    :notes="[
      { pos: [8, 6] },
      { pos: [5, 5] },
      { pos: [7, 5] },
      { pos: [8, 5] },
      { pos: [5, 4] },
      { pos: [7, 4] },
      { pos: [9, 4] },
      { pos: [5, 3] },
      { pos: [7, 3] },
      { pos: [9, 3] },
      { pos: [6, 2] },
      { pos: [8, 2] },
      { pos: [10, 2] },
      { pos: [10, 1] },
      { pos: [8, 1] },
      { pos: [7, 1] },
    ]"
  />
  <h2>第七把位（六弦 - 中指）</h2>
  <GuitarFingerboard
    :notes="[
      { pos: [8, 6] },
      { pos: [5, 5] },
      { pos: [7, 5] },
      { pos: [8, 5] },
      { pos: [5, 4] },
      { pos: [7, 4] },
      { pos: [9, 4] },
      { pos: [5, 3] },
      { pos: [7, 3] },
      { pos: [9, 3] },
      { pos: [6, 2] },
      { pos: [8, 2] },
      { pos: [10, 2] },
      { pos: [10, 1] },
      { pos: [8, 1] },
      { pos: [7, 1] },
    ]"
  />
  <h2>第八把位（六弦 - 食指）</h2>
  <GuitarFingerboard
    :notes="[
      { pos: [8, 6] },
      { pos: [10, 6] },
      { pos: [12, 6] },
      { pos: [8, 5] },
      { pos: [10, 5] },
      { pos: [12, 5] },
      { pos: [9, 4] },
      { pos: [10, 4] },
      { pos: [12, 4] },
      { pos: [9, 3] },
      { pos: [10, 3] },
      { pos: [12, 3] },

      { pos: [10, 2] },
      { pos: [12, 2] },

      { pos: [10, 1] },
      { pos: [12, 1] },
    ]"
  />
  <GuitarFingerboard
    :notes="[
      { pos: [1, 2] },
      { pos: [1, 1] },
    ]"
  />
  <h2>第十把位（四弦 - 食指）</h2>
  <GuitarFingerboard
    :notes="[
      { pos: [10, 4] },
      { pos: [12, 4] },
      { pos: [10, 3] },
      { pos: [12, 3] },
      { pos: [12, 2] },
      { pos: [12, 1] },
    ]"
  />
  <GuitarFingerboard
    :notes="[
      { pos: [1, 2] },
      { pos: [3, 2] },
      { pos: [1, 1] },
      { pos: [3, 1] },
    ]"
  />
  <h2>第十二把位（五弦 - 小指）</h2>
  <GuitarFingerboard
    :notes="[
      { pos: [12, 5] },
      { pos: [12, 4] },
      { pos: [12, 3] },
      { pos: [12, 2] },
      { pos: [12, 1] },
    ]"
  />
  <GuitarFingerboard
    :notes="[
      { pos: [3, 5] },
      { pos: [3, 4] },
      { pos: [2, 4] },
      { pos: [2, 3] },
      { pos: [3, 2] },
      { pos: [1, 2] },
      { pos: [3, 1] },
      { pos: [1, 1] },
    ]"
  />
  <h2>第十四把位（五弦/高把位 - 中指）</h2>
  <GuitarFingerboard
    :notes="[
      { pos: [3, 5] },
      { pos: [5, 5] },
      { pos: [3, 4] },
      { pos: [2, 4] },
      { pos: [5, 4] },
      { pos: [5, 3] },
      { pos: [4, 3] },
      { pos: [2, 3] },
      { pos: [6, 2] },
      { pos: [5, 2] },
      { pos: [3, 2] },
      { pos: [3, 1] },
      { pos: [5, 1] },
    ]"
  />
  <h2>第十五把位（五弦/高把位 - 食指）</h2>
  <GuitarFingerboard
    :notes="[
      { pos: [3, 5] },
      { pos: [5, 5] },
      { pos: [7, 5] },
      { pos: [3, 4] },
      { pos: [5, 4] },
      { pos: [7, 4] },
      { pos: [4, 3] },
      { pos: [5, 3] },
      { pos: [7, 3] },
      { pos: [5, 2] },
      { pos: [6, 2] },
      { pos: [8, 2] },
      { pos: [8, 1] },
      { pos: [7, 1] },
      { pos: [5, 1] },
    ]"
  />
</template>
