<script setup lang="ts">
import { computed } from 'vue'

const num = computed(() => {
  
  const p = ($slidev.nav.currentPage / $slidev.nav.total) * 100
  return Math.floor(p)
})
</script>

<template>
  <div class="bottom absolute bottom-0 right-0 p-2 flex" v-if="![1, 2, $slidev.nav.total + 1].includes($slidev.nav.currentPage)">
    <div>{{$slidev.nav.currentPage}}</div>
  </div>
</template>

<style>
.bottom {
  color: rgb(243, 243, 227);
  font-size: 32px;
  z-index: 99;
}
</style>