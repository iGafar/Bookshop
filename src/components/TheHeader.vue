<script setup>
import { ref } from 'vue';
import { useRootStore } from '@/stores/root';

const rootStore = useRootStore();
const activeLink = ref('books');
const menuList = [
  { link: '#', title: 'books' },
  { link: '#', title: 'audiobooks' },
  { link: '#', title: 'Stationery & gifts' },
  { link: '#', title: 'blog' }
];
</script>
<template>
  <header>
    <div class="container">
      <span>Bookshop</span>
      <nav>
        <a
          v-for="item in menuList"
          :key="item.title"
          :href="item.link"
          :class="{ active: item.title === activeLink }"
          @click="activeLink = item.title"
          >{{ item.title }}</a
        >
      </nav>
      <div>
        <span><img src="/src/assets/img/icons/user.svg" alt="user" /></span>
        <span><img src="/src/assets/img/icons/search.svg" alt="search" /></span>
        <span class="basket"
          ><img src="/src/assets/img/icons/shop-bag.svg" alt="shop" /><span>{{
            rootStore.basket.length
          }}</span></span
        >
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: #fff;
  position: fixed;
  width: 100vw;
  z-index: 3;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 116px;

  & > span {
    font-size: 2.4rem;
    font-weight: 700;
  }

  nav {
    display: flex;
    gap: 4rem;
    font-weight: 700;
    text-transform: uppercase;

    a {
      transition: all 200ms linear;
      &.active {
        color: var(--text-black);
        font-weight: 900;
      }
    }
  }

  div {
    display: flex;
    gap: 4rem;

    span:hover {
      cursor: pointer;
    }

    .basket {
      position: relative;

      span {
        position: absolute;
        color: #fff;
        min-width: 13px;
        height: 13px;
        padding: 0 1px;
        border-radius: 10px;
        text-align: center;
        background-color: #ff353a;
        font-size: 10px;
        font-weight: 500;
        right: -4px;
        bottom: -1px;
      }
    }
  }
}

@media (max-width: 810px) {
  .container {
    height: 60px;
  }
}

@media (max-width: 550px) {
  .container {
    & > span {
      font-size: 2rem;
    }

    nav {
      gap: 10px;
      font-size: 7px;
    }

    div {
      gap: 12px;
      span {
        height: 12px;

        img {
          height: 100%;
        }
      }
      .basket {
        span {
          right: -6px;
          bottom: -7px;
        }
      }
    }
  }
}
</style>
