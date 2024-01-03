<script setup>
import bookPlaceholder from '@/assets/img/book-cover-placeholder.png';
const props = defineProps(['cart']);

const grayStars = Math.round(5 - props.cart.volumeInfo.averageRating);
</script>

<template>
  <div class="cart">
    <picture>
      <img :src="props.cart.volumeInfo.imageLinks?.thumbnail || bookPlaceholder" alt="book-img" />
    </picture>

    <div>
      <p class="author" v-for="author in props.cart.volumeInfo.authors" :key="author">
        {{ author }}
      </p>
      <h3>{{ props.cart.volumeInfo.title }}</h3>
      <span v-if="props.cart.volumeInfo.averageRating">
        <img
          src="/src/assets/img/icons/star-yellow.svg"
          alt="yellow star"
          v-for="star in Math.round(props.cart.volumeInfo.averageRating)"
          :key="star"
        />
        <img
          src="/src/assets/img/icons/star-gray.svg"
          alt="star-gray"
          v-for="star in grayStars"
          :key="star"
        />
      </span>
      <span v-if="props.cart.volumeInfo.ratingsCount"
        >{{ props.cart.volumeInfo.ratingsCount }} review</span
      >
      <p class="description">{{ props.cart.volumeInfo.description }}</p>
      <p class="price" v-if="props.cart.saleInfo.retailPrice?.amount">
        {{ props.cart.saleInfo.retailPrice.currencyCode === 'RUB' ? '₽' : '$'
        }}{{ props.cart.saleInfo.retailPrice.amount }}
      </p>
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

  picture {
    min-width: 21.2rem;
    height: 32.8rem;
    img {
      width: 100%;
      height: 100%;
      box-shadow: 0px 24px 36px 0px rgba(53, 49, 84, 0.28);
    }
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
      overflow: hidden;
      display: -webkit-box;
      line-clamp: 3;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
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

@media (max-width: 1150px) {
  .cart {
    gap: 16px;
    width: 395px;

    button {
      width: 100%;
    }
  }
}

@media (max-width: 990px) {
  .cart {
    width: calc(50% - 10px);
    gap: 10px;

    div {
      min-height: 70%;
      width: 100%;
      display: flex;
      flex-direction: column;
      span {
        margin: 0 2px 5px 0;
      }
      button {
        width: 100%;
        margin-top: auto;
      }
    }
  }
}

@media (max-width: 500px) {
  .cart {
    width: 100%;

    div {
      button {
        width: 100px;
        margin-left: auto;
        height: 30px;
      }
    }
  }
}
</style>
