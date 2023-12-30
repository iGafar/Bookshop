<script setup>
import BookCart from './BookCart.vue';
import { BASE_URL, API_KEY } from '@/constants';
import { onBeforeMount, ref } from 'vue';

const books = ref(null);
const startIndex = ref(0);

onBeforeMount(async () => {
  books.value = await fetch(
    `${BASE_URL}?q="subject:Business"&key=${API_KEY}&printType=books&startIndex=${startIndex.value}&maxResults=6&langRestrict=en`
  )
    .then((data) => data.json())
    .then((data) => data.items);
});
</script>

<template>
  <section>
    <div class="container">
      <ul>
        <li v-for="genre in books" :key="genre.id"></li>
        <div class="carts">
          <BookCart v-for="cart in books" :key="cart.id" :cart="cart" />
        </div>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.container {
  display: flex;
}
.carts {
  display: flex;
  flex-wrap: wrap;
}
</style>
