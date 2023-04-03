<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from "vue-router";

// sirve para acceder a los parametros de la ruta
const route = useRoute();
const router = useRouter();

const poke = ref([]);

const back = () => {
  router.push('/pokemons');
}

const getData = async () => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${route.params.name}`
    );
    console.log(data);
    poke.value = data;
  } catch (error) {
    console.log(error);
    poke.value = null;
  }
}

getData();
</script>
<template>
  <div v-if="poke">
    <img :src="poke.sprites?.front_default" alt="">
    <h1>Pokemon: {{ $route.params.name }}</h1>
  </div>
  <h1 v-else>No existe Pokemon</h1>
  <button @click="back" class="btn btn-outline-primary">
    Volver
  </button>
</template>