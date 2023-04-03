<script setup>
import { computed, onMounted, ref } from 'vue';
import BlogPost from './components/BlogPost.vue';
import PaginatePost from './components/PaginatePost.vue';
import SpinnerLoading from './components/SpinnerLoading.vue';
// const posts = ref([
//   {title: 'Post 1', id: 1, body: 'description 1'},
//   {title: 'Post 2', id: 2, body: 'description 2'},
//   {title: 'Post 3', id: 3, body: 'description 3'},
//   {title: 'Post 4', id: 4},
// ]);
const loading = ref(true);

const posts = ref([]);
const postXpage = 10;
const start = ref(0);
const end = ref(postXpage);

const favorite = ref('');

const changeFavorite = (title) => {
  favorite.value = title;
}

const nextAction = () => {
  start.value = start.value + postXpage;
  end.value = end.value + postXpage;
}
const previousAction = () => {
  start.value = start.value - postXpage;
  end.value = end.value - postXpage;
}

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res => res.json())
//   .then(data => {
//     posts.value = data;
//   })
//   .catch(err => {
//     console.log(err);
//   })
//   .finally(() => {
//     loading.value = false;
//   });

onMounted( async() => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    posts.value = await res.json();
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }

});

const totalPosts = computed(() => posts.value.length);

</script>

<template>
  <SpinnerLoading v-if="loading"/>
  <div class="container" v-else>
    <h1>APP</h1>
    <!-- <ButtonCounter/> -->
    <h2>Mis Posts favoritos: {{ favorite }}</h2>
    
    <!-- <button @click="previousAction">Previous provisorio</button>
    <button @click="nextAction">Next provisorio</button> -->


    <PaginatePost 
      class="mb-2"
      @previousAction="previousAction"
      @nextAction="nextAction"
      :start="start"
      :end="end"
      :totalPosts="totalPosts"
    />

    <BlogPost
      v-for="post in posts.slice(start, end)"
      :title="post.title" 
      :id="post.id" 
      :body="post.body"
      :key="post.id"
      @changeFavorite="changeFavorite"
      class="mb-2"  
    />

  </div>
</template>