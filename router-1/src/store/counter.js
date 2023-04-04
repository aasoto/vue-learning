import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  
  const increment = () => count.value ++;

  const double = computed(() => count.value * 2); //una propiedad computada es aquella que muestra el cambio pero no modifica la variable principal.

  return {
    count,
    increment,
    double,
  };
});

/**
 * Así se hace con la API de opciones
 */
// export const useCounterStore = defineStore('counter', {
//   state: () => ({
//     count: 0,
//   }),
//   actions: {
//     increment() {
//       this.count++;
//     },
//   },
//   getters: {
//     double: (state) => state.count * 2,
//   },
// });