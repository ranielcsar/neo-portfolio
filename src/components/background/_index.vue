<template>
  <div class="absolute bottom-10 -z-10 w-full overflow-hidden">
    <div class="triangle yellow -left-10 md:-left-20"></div>
    <div class="triangle mint lg:left-20"></div>
    <div class="triangle pale-blue right-10 md:right-52 lg:left-80 xl:left-[25vw]"></div>
    <div
      class="triangle electric-blue -z-10 hidden md:-right-36 md:block lg:right-40 xl:left-[40vw]"
    ></div>
    <div class="triangle mint mint-2 xl -right-24 z-10 md:right-0 lg:left-1/2"></div>
    <div
      class="triangle pale-blue pale-blue-2 z-10 hidden lg:-right-20 lg:block xl:right-[15vw]"
    ></div>
    <div class="triangle mint mint-3 z-10 hidden xl:-right-24 xl:block"></div>
  </div>
</template>

<style scoped>
.triangle {
  @apply fixed bottom-10 h-0 w-0 rotate-0 border-solid;
  @apply lg:bottom-0;

  --color: transparent;
  --border-w: 0 0 0 0;

  border-width: var(--border-w);
  border-color: transparent transparent var(--color) transparent;
}

.yellow {
  --color: rgb(var(--yellow));
  --border-w: 0 25vw 20vh 25vw;
}

.mint {
  --color: rgb(var(--mint));
  --border-w: 0 35vw 25vh 35vw;
}

.pale-blue {
  --color: rgb(var(--pale-blue));
  --border-w: 0 22vw 13vh 22vw;
}

.mint-2 {
  --border-w: 0 30vw 20vh 30vw;
}

.electric-blue {
  --color: rgb(var(--electric-blue));
}

@media screen and (min-width: 768px) {
  .yellow {
    --border-w: 0 20vw 20vh 20vw;
  }

  .mint {
    --border-w: 0 25vw 25vh 25vw;
  }

  .pale-blue {
    --border-w: 0 15vw 12vh 15vw;
  }

  .mint-2 {
    --border-w: 0 20vw 20vh 20vw;
  }

  .electric-blue {
    --border-w: 0 18vw 15vh 18vw;
  }
}

@media screen and (min-width: 1024px) {
  .yellow {
    --border-w: 0 14vw 23vh 14vw;
  }

  .mint {
    --border-w: 0 20vw 30vh 20vw;
  }

  .pale-blue {
    --border-w: 0 10vw 18vh 10vw;
  }

  .mint-2 {
    --border-w: 0 12vw 22vh 12vw;
  }

  .electric-blue {
    --border-w: 0 7vw 12vh 7vw;
  }

  .pale-blue-2 {
    --border-w: 0 15vw 18vh 15vw;
  }
}

@media screen and (min-width: 1360px) {
  .yellow {
    --border-w: 0 10vw 26vh 10vw;
  }

  .mint {
    --border-w: 0 14vw 30vh 14vw;
  }

  .pale-blue {
    --border-w: 0 10vw 18vh 10vw;
  }

  .mint-2 {
    --border-w: 0 12vw 22vh 12vw;
  }

  .electric-blue {
    --border-w: 0 7vw 12vh 7vw;
  }

  .pale-blue-2 {
    --border-w: 0 10vw 18vh 10vw;
  }

  .mint-3 {
    --border-w: 0 12vw 20vh 10vw;
  }
}
</style>
