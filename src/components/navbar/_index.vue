<script setup lang="ts">
import { RouterLink } from 'vue-router'
const path = window?.location.pathname
</script>

<template>
  <footer
    class="fixed bottom-0 z-30 w-full bg-white lg:bottom-5 lg:bg-transparent xl:inset-x-[15vw] xl:w-[70%]"
  >
    <nav
      class="relative flex items-center border-t-4 border-black bg-white lg:m-auto lg:w-1/2 lg:border-4"
    >
      <router-link :to="`${path}`">Home</router-link>
      <router-link :to="`${path}projetos`">Projetos</router-link>
      <router-link :to="`${path}experiencias`">Experiências</router-link>
      <router-link :to="`${path}curriculo`">Currículo</router-link>
    </nav>
  </footer>
</template>

<style scoped>
a {
  @apply flex-[0.5] truncate px-1 py-3 text-center text-xl transition-all;
  @apply border-black [&:not(:last-child)]:border-r-4;
}

a.active-link {
  @apply flex-1 bg-electric-blue text-black;
}
</style>
