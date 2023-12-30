<script setup>
import { onMounted, ref, watch } from 'vue';
const headerHeight = ref(0);
const currentPosition = ref(1);
const swiperItemWidth = ref(0);
const slides = 3;
let swiperContainer = null;

addEventListener('resize', () => {
  getSwiperWidth();
  swipe();
});

watch(currentPosition, () => {
  swipe();
});

function getSwiperWidth() {
  swiperItemWidth.value = document
    .querySelector('.swiper-main li img')
    .getBoundingClientRect().width;
}

function swipe() {
  swiperContainer.style.transform =
    `translateX(-` + swiperItemWidth.value * currentPosition.value + 'px)';
}

function handlePagClick(i) {
  currentPosition.value = i;
}

onMounted(() => {
  headerHeight.value = document.querySelector('header').offsetHeight;
  getSwiperWidth();
  swiperContainer = document.querySelector('.swiper-main');

  setInterval(function () {
    currentPosition.value === 2 ? (currentPosition.value = 0) : currentPosition.value++;
  }, 5000);
});
</script>

<template>
  <section :style="`margin-top:${headerHeight}px`">
    <div class="container">
      <div class="swiper">
        <ul class="swiper-main">
          <li v-for="slide in slides" :key="slide">
            <img :src="`/src/assets/img/swiper/banner${slide}.jpg`" alt="banner" />
          </li>
        </ul>
      </div>
      <div class="pagination">
        <span
          v-for="pag in slides"
          :key="pag"
          @click="handlePagClick(pag - 1)"
          :class="{ active: pag - 1 === currentPosition }"
        ></span>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  margin-bottom: 105px;
}

.swiper {
  overflow: hidden;
  margin-bottom: 17px;

  &-main {
    display: flex;
    transition: all 800ms ease-in-out;

    li {
      min-width: 100%;
      img {
        width: 100%;
      }
    }
  }
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 1rem;

  span {
    display: inline-block;
    width: 12px;
    height: 12px;
    background-color: #efeef6;
    border-radius: 50%;

    &:hover {
      cursor: pointer;
    }
    &.active {
      background-color: #9e98dc;
    }
  }
}
</style>
