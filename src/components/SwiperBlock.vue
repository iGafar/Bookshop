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
  headerHeight.value = document.querySelector('header').offsetHeight;
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

    <a
      href="https://absolutewrite.com/forums/index.php?threads/replacing-old-books-with-new-copies.345167/"
      target="_blank"
    >
      Change old book on new
      <img src="/src/assets/img/icons/arrow-for-link.svg" alt="arrow" />
    </a>
    <a
      href="https://www.goodreads.com/list/show/176183.Better_Reading_Top_100_2022"
      target="_blank"
    >
      top 100 books 2022
      <img src="/src/assets/img/icons/arrow-for-link.svg" alt="arrow" />
    </a>
  </section>
</template>

<style scoped lang="scss">
section {
  margin-bottom: 105px;
  position: relative;

  & > a {
    color: var(--text-black);
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: uppercase;
    position: absolute;

    &:first-of-type {
      max-width: 149px;
      top: 9%;
      right: 6%;
      display: inline-block;
      padding: 102px 20px 36px;
      background: #9e98dc;
    }

    &:last-of-type {
      max-width: 137px;
      bottom: 10%;
      right: 0;
      display: inline-block;
      padding: 149px 47px 20px 21px;
      background: #ff8fe6;
    }
  }
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
        height: 100%;
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

@media (max-width: 1200px) {
  section > a {
    &:first-of-type {
      max-width: 134px;
      top: 0;
      right: 2%;
      padding: 60px 15px 20px;
    }

    &:last-of-type {
      max-width: 121px;
      bottom: 10%;
      padding: 95px 30px 15px 15px;
    }
  }
}

@media (max-width: 810px) {
  section > a {
    img {
      width: 40px;
    }
    &:first-of-type {
      max-width: none;
      top: 0;
      right: unset;
      padding: 7px;
      left: 10px;
    }

    &:last-of-type {
      max-width: none;
      bottom: 29px;
      padding: 7px;
      right: 10px;
    }
  }
}

@media (max-width: 650px) {
  section {
    margin-bottom: 50px;

    a {
      &:last-of-type {
        bottom: 17px;
      }
    }
  }
  .swiper {
    margin-bottom: 7px;
  }

  .pagination {
    span {
      width: 10px;
      height: 10px;
    }
  }
}

@media (max-width: 550px) {
  section > a {
    img {
			width: 26px;
		}
		
		&:last-of-type,
    &:first-of-type {
      padding: 5px;
    }
  }
}

@media (max-width: 400px) {
	section > a {
		img {
			display: none;
		}
	}
}
</style>
