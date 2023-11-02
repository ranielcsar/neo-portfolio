<template>
  <header>
    <p>{{ '<ranielcsar />' }}</p>
  </header>
</template>

<style scoped>
header {
  @apply relative w-screen flex items-center justify-center py-4 max-w-[18rem] self-center;
}

header p {
  @apply text-4xl font-bold tracking-wider text-black z-20;
  @apply after:absolute after:-z-10 after:bottom-3 after:left-[15%] after:w-[85%] after:bg-electric-blue after:h-1/3 after:shadow-neo-md;
}
</style>
