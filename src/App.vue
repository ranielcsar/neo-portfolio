<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from '@/components/header/_index.vue'
import Navbar from '@/components/navbar/_index.vue'
import Background from '@/components/background/_index.vue'
</script>

<template>
  <div class="relative flex flex-1 flex-col gap-10">
    <main-header />

    <main class="relative m-auto flex flex-1 pb-24">
      <div class="z-20 m-auto px-4 xl:max-w-[90rem] xl:px-0">
        <transition name="fade">
          <router-view v-slot="{ Component }">
            <component :is="Component" />
          </router-view>
        </transition>
      </div>
    </main>

    <navbar />
  </div>

  <background />
</template>

<style>
.fade-enter-active {
  transition: opacity 0.15s ease-in;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter-from {
  opacity: 0;
}
</style>
