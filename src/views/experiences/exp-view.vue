<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <li className="flex list-none flex-col gap-4">
    <h3
      className="bg-pale-blue text-[2ch] px-3 py-2 border-4 border-black shadow-neo-md font-bold w-auto max-w-max tracking-wider"
    >
      {{ title }}
    </h3>

    <section className="text-[2ch] leading-relaxed">
      <slot></slot>
    </section>
  </li>
</template>
