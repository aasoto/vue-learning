<script setup>
import { useCounterStore } from '../store/counter';

const useConter = useCounterStore();
</script>

<template>
  <main>
    <h1>Home counter: {{ useConter.count }}</h1>
    <h2>Double: {{ useConter.double }}</h2>
    <button @click="useConter.increment">Increment</button>
  </main>
</template>
