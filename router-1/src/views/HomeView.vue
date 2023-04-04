<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../store/counter';

const useConter = useCounterStore();

const { increment } = useConter;
const { count, double } = storeToRefs(useConter);
</script>

<template>
  <main>
    <h1>Home counter: {{ count }}</h1>
    <h2>Double: {{ double }}</h2>
    <button @click="increment">Increment</button>
  </main>
</template>
