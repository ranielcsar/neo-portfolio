<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel'
import type { ProjectProps } from './project-type'
import Project from './project-view.vue'

import 'vue3-carousel/dist/carousel.css'

import { ref } from 'vue'
const current_slide = ref(0)

const projects: ProjectProps[] = [
  {
    title: 'Shoping cart with Tests',
    description: 'Shopping cart feito com NextJS e que possui testes unitários',
    image: 'src/assets/next-shopping-cart.webp',
    links: {
      sandbox: 'https://h8ctsg-3000.csb.app/',
      github: 'https://github.com/ranielcsar/next-shopping-cart-testings'
    }
  },
  {
    title: 'Upload AI (NLW AI)',
    description:
      'Cria resultados gerados pela API da OpenAI a partir de prompts pré-cadastrados, para vídeos.',
    image: 'src/assets/nlw-ai.webp',
    links: {
      sandbox: 'https://v4xv8t-5173.csb.app/',
      github: 'https://github.com/ranielcsar/nlw-ai'
    }
  },
  {
    title: 'Coinsynch (desafio vaga)',
    description:
      'Aplicação que simula uma carteira de Cryptomoedas na qual o usuário pode se registrar, logar, fazer logout, adicionar moedas em sua carteira, remover, vender e/ou trocar e também se inscrever na Newsletter.',
    image: 'src/assets/coinsynch.webp',
    links: {
      sandbox: 'https://8p4cxd-3000.csb.app/',
      github: 'https://github.com/ranielcsar/coinsynch'
    }
  },
  {
    title: 'Capsula do Tempo (NLW Spacetime)',
    description:
      'O usuário pode salvar memórias, escrever sobre elas e adicionar fotos/vídeos. Com versões web e mobile, login através do Github e funcionalidades para tornar as memórias públicas ou privadas.',
    image: 'src/assets/nlw-spacetime.webp',
    links: {
      sandbox: 'https://6l9ld9-3000.csb.app/',
      github: 'https://github.com/ranielcsar/nlw-spacetime'
    }
  },
  {
    title: "John's Task List (desafio vaga)",
    description: 'CRUD de tarefas com subtarefas.',
    image: '/src/assets/john-tasks.webp',
    links: {
      sandbox: 'https://3dsjkz-3000.csb.app/',
      github: 'https://github.com/ranielcsar/john_task_list'
    }
  }
]
</script>

<template>
  <carousel
    ref="carousel_ref"
    class="max-w-[90vw] text-start"
    :items-to-show="1.1"
    :snap-align="'start'"
    :wrap-around="true"
    @slide-start="({ slidingToIndex }) => (current_slide = slidingToIndex)"
  >
    <slide v-for="(project, index) in projects" :key="project.title" class="flex items-start gap-2">
      <project :project="project" :active="index === current_slide" />
    </slide>
  </carousel>
</template>
