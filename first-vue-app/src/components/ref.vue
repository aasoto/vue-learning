<script setup>
import { computed, ref } from 'vue';

const counter = ref(0);
const favorites = ref([]);

const increment = () => {
  counter.value++;
}

const decrement = () => {
  counter.value--;
}

const reset = () => {
  counter.value = 0;
}

const classCounter = computed(() => {
  if (counter.value === 0) {
    return "zero";
  }
  return counter.value > 0 ? "positive" : "negative";
});

const saveFavorite = () => {
  favorites.value.push(counter.value);
}

const disableButton = computed(() => {
  const numSearch = favorites.value.find( num => num === counter.value);
  if (numSearch === 0) return true;
  return numSearch ? true : false;
});
</script>
<template>
  <h1>ref() con VUE</h1>
  <ul>
    <li v-for="num in favorites">
      {{ num }}
    </li>
  </ul>
  <h2 v-bind:class="classCounter">{{ counter }}</h2>
  <button @click="increment">Aumentar</button>
  <button @click="decrement">Decrementar</button>
  <button @click="reset">Resetear</button>
  <button 
    @click="saveFavorite()"
    :disabled="disableButton"
    >Agregar</button>
</template>
<style>
.negative {
  color: red;
}

.positive {
  color: green;
}

.zero {
  color: black;
}
</style>