<script setup>
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router';
import { useFavoritosStore } from '../store/favoritos';

const useFavoritos = useFavoritosStore();

const { favoritos } = storeToRefs(useFavoritos); //para getters o propiedades computadas
const { remove } = useFavoritos;
</script>
<template>
  <h1>Favoritos</h1>
  <p v-if="favoritos.length === 0">Sin favoritos</p>
  <ul class="list-group" v-else>
    <li class="list-group-item" v-for="poke in favoritos" :key="poke.id">
      <div>
        {{ poke.name }}
      </div>
      <div>
        <RouterLink :to="`/pokemons/${poke.name}`" class="btn btn-sm btn-primary me-2">
          Ver más
        </RouterLink>
        <button class="btn btn-sm btn-danger" @click="remove(poke.id)">
          Eliminar
        </button>
      </div>
    </li>
  </ul>
</template>