<script setup>
import { RouterLink } from 'vue-router';
import { useGetData } from '../composables/getData';

const {data, error, getData, loading} = useGetData();

getData("https://pokeapi.co/api/v2/pokemon");

</script>
<template>
  <h1>Mostrando pokemons</h1>
  <div v-if="error" class="alert alert-danger mt-2">{{ error }}</div>
  <p v-if="loading">Cargando información...</p>
  <template v-if="data">
    <ul class="list-group">
      <li v-for="pokemon in data.results" class="list-group-item">
        <RouterLink :to="`/pokemons/${pokemon.name}`">
          {{ pokemon.name }}
        </RouterLink>
      </li>
    </ul>
    <div class="mt-2">
      <button 
        :disabled="!data.previous"
        class="btn btn-primary me-2"
        @click="getData(data.previous)"
      >
        Previous
      </button>
      <button 
        :disabled="!data.next"
        class="btn btn-success"
        @click="getData(data.next)"
      >
        Next
      </button>
    </div>
  </template>
</template>