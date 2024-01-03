<script setup>
import TheHeader from './components/TheHeader.vue';
import SwiperBlock from './components/SwiperBlock.vue';
import CartsBlock from './components/CartsBlock.vue';
</script>

<template>
  <div class="wrapper">
    <TheHeader />
    <main>
      <SwiperBlock />
      <CartsBlock />
    </main>
  </div>
</template>

<style lang="scss">
html,
body {
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  color: var(--text-gray);
  line-height: normal;
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}

.container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 30px;
}

.button {
  color: #4c3db2;
}

@media (max-width: 1025px) {
  html,
  body {
    font-size: 8px;
  }
}

@media (max-width: 860px) {
  .container {
    padding: 0 10px;
  }
}

@media (max-width: 650px) {
  html,
  body {
    font-size: 7px;
  }
}

@media (max-width: 550px) {
  html,
  body {
    font-size: 5px;
  }
}
</style>
