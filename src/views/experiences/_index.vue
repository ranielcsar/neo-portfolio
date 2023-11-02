<script setup lang="ts">
import ExpView from './exp-view.vue'
</script>

<template>
  <section class="w-full flex-1 flex-col items-center">
    <exp-view title="Dev Frontend Jr ~ (PJ na Brainny Smart Solutions)">
      Prestação de serviços para reparo e criação de novas funcionalidades em aplicações web de
      administração, assim como em landing pages, usando tecnologias web como React, TypeScript,
      ChakraUI, Apollo e GraphQL. Atuação em uma equipe ágil seguindo metodologias do Scrum
      (dailies, reviews, plannings, sprints, etc) para desenvolver soluções web eficientes e de alta
      qualidade.

      <p class="mt-5">
        Tempo de atuação:
        <strong class="tracking-wide">Setembro de 2021 - Outubro de 2022</strong>
      </p>
    </exp-view>

    <exp-view title="Dev Frontend Jr ~ (Freelancer na SystemHope - Agência de Software)">
      Reparos e criação de novas funcionalidades em aplicações web de administração, como também num
      projeto de plataforma EAD, utilizando React, TypeScript e ChakraUI como principais
      tecnologias.

      <p class="mt-5">
        Tempo de atuação:
        <strong class="tracking-wide">Maio de 2020 - Novembro de 2020</strong>
      </p>
    </exp-view>
  </section>
</template>

<style scoped>
section {
  @apply flex flex-col gap-10;
}
</style>
