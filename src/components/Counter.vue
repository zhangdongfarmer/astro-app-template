<template>
  <div class="counter-container">
    <h2 class="counter-title">计数器示例</h2>
    <div class="counter-value">{{ counterStore.count }}</div>
    <div class="counter-buttons">
      <button class="counter-button" @click="counterStore.decrement">-</button>
      <button class="counter-button" @click="counterStore.reset">重置</button>
      <button class="counter-button" @click="counterStore.increment">+</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/counter'

const counterStore = useCounterStore()
</script>

<style scoped>
.counter-container {
  padding: 2rem;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

.counter-title {
  margin-bottom: 1rem;
  color: #333;
  font-size: 1.5rem;
}

.counter-value {
  font-size: 3rem;
  font-weight: bold;
  margin: 1rem 0;
  color: #1a1a1a;
}

.counter-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.counter-button {
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.counter-button:hover {
  background-color: #357abd;
}
</style> 