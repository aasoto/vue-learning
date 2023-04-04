<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from "vue-router";
import { useGetData } from '../composables/getData';

// sirve para acceder a los parametros de la ruta
const route = useRoute();
const router = useRouter();

const back = () => {
  router.push('/pokemons');
}

const { data, error, getData, loading } = useGetData();

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>
<template>
  <p v-if="loading">Cargando información...</p>
  <div v-if="error" class="alert alert-danger mt-2">{{ error }}</div>
  <div v-if="data">
    <img :src="data.sprites?.front_default" alt="">
    <h1>Pokemon: {{ $route.params.name }}</h1>
  </div>
  <button @click="back" class="btn btn-outline-primary">
    Volver
  </button>
</template>