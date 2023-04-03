<script setup>
  defineProps(['start', 'end', 'totalPosts']);

  const emit = defineEmits(['previousAction', 'nextAction']);
</script>

<template>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button 
      type="button" 
      class="btn btn-outline-primary"
      @click="emit('previousAction')"
      :disabled="start <= 0"
    >
      Previous
    </button>
    <button 
      type="button" 
      class="btn btn-outline-primary"
      @click="emit('nextAction')"
      :disabled="end >= totalPosts"
    >
      Next
    </button>
  </div>  
</template>