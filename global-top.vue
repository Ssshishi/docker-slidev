<script setup lang="ts">
import Progress from './components/progress.vue'
import { computed } from 'vue'

const num = computed(() => {
  const p = ($slidev.nav.currentPage / $slidev.nav.total) * 100
  return Math.floor(p)
})
</script>

<template>
  <div v-if="![1, 2, $slidev.nav.total + 1].includes($slidev.nav.currentPage)">
    <div class="top absolute top-0 right-0 p-2">
      <Image class="w-20" src="/logo.png" />
    </div>
    <div class="progress absolute top-0 left-0">
      <Progress :targetValue="num" />
    </div>
  </div>
</template>

<style>
.top {
  color: rgb(55, 95, 255);
  font-size: 12px;
}
.progress {
  top: -20px;
  left: -45px;
}
</style>
