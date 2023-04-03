<script setup>
import Ref from './components/ref.vue';

  const name = "Vue dinámico";
  const styleColor = "color: blue";
  const arrayColores = ["blue", "red", "peru"];
  const activo = true;
  const arrayFrutas = ["🍎", "🍌", "🍉", "🍓", "🍒"];
  const objectArrayFrutas = [
    {
      name: "Manzana",
      price: "$1.00",
      description: "Una manzana",
    },
    {
      name: "Pera",
      price: "$2.00",
      description: "Una pera",
    },
    {
      name: "Naranja",
      price: "$3.00",
      description: "Una naranja",
    },
  ];
  const objectFruta = {
    name: "Manzana",
    price: "$1.00",
    description: "Una manzana",
  };
  const objectArrayFrutas2 = [
    {
        name: "Manzana",
        price: "$1.00",
        description: "Una manzana",
        stock: 0,
    },
    {
        name: "Pera",
        price: "$2.00",
        description: "Una pera",
        stock: 10,
    },
    {
        name: "Naranja",
        price: "$3.00",
        description: "Una naranja",
        stock: 20,
    },
];
const handleClick = (message) => {
  console.log(message);
}
</script>
<template>
  <h1>Hello World {{ name.toUpperCase() }}</h1>
  <h2>{{ arrayColores }}</h2>

  <!-- v-bind -->
  <h2 v-bind:style="`color: ${arrayColores[2]}`">Soy perú</h2>
  <hr>

  <!-- v-if -->
  <h2 v-if="activo === true">
    <span>Icono</span>
    Estoy activo
  </h2>
  <p v-else-if="activo === false">Estoy inactivo</p>
  <p v-else>Estoy indeciso</p>
  <hr>

  <!-- v-show -->
  <h2 v-show="activo">Estoy activo v-show</h2>
  <hr>

  <!-- v-for -->
  <ul>
    <li v-for="(fruta, index) in arrayFrutas" :key="index">
      {{ index }} - {{ fruta }}
    </li>
  </ul>
  <hr>

  <!-- v-for con array de objetos -->
  <ul>
    <li v-for="fruta in objectArrayFrutas" :key="fruta.name">
      {{ fruta.name }} - {{ fruta.price }} - {{ fruta.description }}
    </li>
  </ul>
  <hr>

  <!-- v-for con un objeto -->
  <ul>
    <li v-for="value in objectFruta" :key="value">
      {{ value }}
    </li>
  </ul>
  <ul>
    <li v-for="(value, propiedad, index) in objectFruta" :key="index">
      {{ index }} - {{ propiedad }} : {{ value }}
    </li>
  </ul>
  <hr>
  <!-- v-for + v-if -->
  <ul>
    <template v-for="item in objectArrayFrutas2" :key="item.name">
      <li v-if="item.stock > 0">{{ item.name }} - {{ item.price }}</li>
    </template>
  </ul>
  <hr>

  <!-- v-on:click -->
  <button @click="handleClick('Texto Left')">Activame left</button>
  <button @click.middle="handleClick('Texto Middle')">Activame middle</button>
  <button v-on:click.right.prevent="handleClick('Texto Right')">Activame right</button>
  <hr>

  <!-- ref() Reactividad -->
  <Ref/>
</template>
<style>
h1 {
  color: red;
}
</style>
<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->
