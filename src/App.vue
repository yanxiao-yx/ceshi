<script setup lang="ts">
import { ref, computed } from 'vue'

const count = ref(0)
const isDisabled = computed(() => count.value >= 5)

const increment = () => {
  if (!isDisabled.value) {
    count.value++
  }
}
</script>

<template>
  <div class="card">
    <button
      type="button"
      @click="increment"
      :disabled="isDisabled"
      id="increment-btn"
    >
      count is {{ count }}
    </button>
    <p v-if="isDisabled" class="warning">已达到最大点击次数</p>
  </div>
</template>

<style scoped></style>
