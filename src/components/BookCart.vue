<script setup>
defineProps(['cart']);
// import cart from '@/constants/index';
</script>

<template>
  <div class="cart">
    <img :src="cart.volumeInfo.imageLinks.thumbnail" alt="book-img" />

    <div>
      <p class="author" v-for="author in cart.volumeInfo.authors" :key="author">{{ author }}</p>
      <h3>{{ cart.volumeInfo.title }}</h3>
      <span>2</span>
      <span>3</span>
      <p class="description">{{ cart.volumeInfo.description }}</p>
      <p class="price">{{ cart.saleInfo.retailPrice }}</p>
      <button>in the cart</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cart {
  width: 428px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 36px;
  margin: 0 auto;
  margin-bottom: 92px;

  img {
    width: 212px;
    height: 300px;
  }

  div {
    .author {
      text-transform: capitalize;
      margin-bottom: 4px;
      font-family: 'Open Sans', sans-serif;
      font-size: 10px;
      text-transform: capitalize;
    }

    h3 {
      color: var(--text-black);
      font-size: 1.6rem;
      font-weight: 700;
      margin-bottom: 4px;
    }

    span {
      display: inline-block;
      margin-right: 6px;
      margin-bottom: 16px;
      font-family: 'Open Sans', sans-serif;
      font-size: 10px;
    }

    .description,
    .price {
      margin-bottom: 16px;
    }

    .description {
      font-family: 'Open Sans', sans-serif;
      font-size: 10px;
      text-transform: capitalize;
    }

    .price {
      color: var(--text-black);
      font-size: 1.3rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    button {
      width: 176px;
      height: 45px;
      border: 1px solid #eeedf5;
      color: var(--text-gray);
      font-size: 8px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
}
</style>
