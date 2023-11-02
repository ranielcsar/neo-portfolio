<script lang="ts" setup>
import MainProfile from '@/components/profile/_index.vue'
</script>

<template>
  <section class="w-full lg:flex lg:items-center xl:m-auto lg:gap-10 z-20">
    <div class="flex-1 lg:flex-[0.5] lg:sticky lg:top-10">
      <main-profile />
    </div>

    <div class="flex-1">
      <div class="h-full text-xl leading-relaxed lg:text-[2ch] xl:text-[3ch] xl:h-auto mb-5">
        <p>Olá!</p>
        <p>Me chamo <strong>Raniel César</strong> e sou</p>

        <p
          class="bg-pale-blue md:text-center w-full md:w-max xl:w-2/3 md:px-12 h-auto p-4 border-4 border-black shadow-neo-lg mb-3"
        >
          <span class="text-3xl xl:text-4xl">✦ Desenvolvedor Frontend</span>
        </p>

        <p>Nordestino, moro em Sr. do Bonfim, interior da Bahia.</p>
      </div>

      <p className="max-w-[70rem] text-xl leading-relaxed lg:text-[2ch] xl:text-[2.75ch]">
        Apaixonado por Ciência, Tecnologia, Web e entusiasta de UX/UI.
        <br />
        Amo gatos, música e jogos indie, principalmente os feitos em Pixel Art.

        <br />
        Tenho experiência com ReactJS, TypeScript, NextJS, TailwindCSS, ChakraUI entre outras
        bibliotecas de desenvolvimento web. Possuo conhecimento em desenvolvimento Backend com
        NestJS, Prisma e Express.

        <br />
        Atualmente estou estudando VueJS, Python e Aprendizado de Máquina.
      </p>
    </div>
  </section>
</template>
