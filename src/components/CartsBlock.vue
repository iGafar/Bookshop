<script setup>
import BookCart from './BookCart.vue';
import { BASE_URL, API_KEY } from '@/constants';
import genres from '@/constants/subjects';
import { computed, onBeforeMount, onMounted, ref, watch } from 'vue';

const books = ref(null);
const startIndex = ref(0);
const activeGenre = ref(genres[0]);
const url = computed(() => {
  return `${BASE_URL}?q="subject:${encodeURIComponent(
    activeGenre.value
  )}"&key=${API_KEY}&printType=books&startIndex=${startIndex.value}&maxResults=6&langRestrict=en`;
});

const loadMoreBtnText = ref('Load more');

async function getBooks() {
  const res = await fetch(url.value)
    .then((data) => data.json())
    .then((data) => data.items);
  return res;
}

onBeforeMount(async () => {
  books.value = await getBooks();
});

let arrowBtn = null;
let genresList = null;

onMounted(() => {
  arrowBtn = document.querySelector('.genres-arrow');
  genresList = document.querySelector('.books ul');
});

function chooseGenre() {
  if (arrowBtn.textContent === 'Choose a genres') {
    genresList.style.transform = 'translateX(-10px)';
    arrowBtn.textContent = 'Hide list';
  } else {
    genresList.style.transform = 'translateX(-229px)';
    arrowBtn.textContent = 'Choose a genres';
  }
}

async function getMoreBooks() {
  startIndex.value += 6;
  const newBooks = await getBooks();
  newBooks ? books.value.push(...newBooks) : noMoreBooks();
}

function noMoreBooks() {
  loadMoreBtnText.value = 'No more books';
}

watch(activeGenre, async () => {
  startIndex.value = 0;
  books.value = await getBooks();
});
</script>

<template>
  <section>
    <p class="genres-arrow" @click="chooseGenre()">Choose a genres</p>
    <div class="container">
      <div class="books">
        <ul>
          <li
            v-for="genre in genres"
            :key="genre"
            :class="{ active: genre === activeGenre }"
            @click="activeGenre = genre"
          >
            {{ genre }}
          </li>
        </ul>
        <div class="carts" v-if="books">
          <div class="carts-list">
            <BookCart v-for="cart in books" :key="cart.id" :cart="cart" />
          </div>
          <button
            type="button"
            @click="getMoreBooks"
            :disabled="loadMoreBtnText === 'No more books'"
          >
            {{ loadMoreBtnText }}
          </button>
        </div>
        <div class="container loading" v-else>
          <p>Loading...</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loading {
  font-size: 3rem;
  font-weight: 700;
  animation: blink 2000ms infinite;
}

.genres-arrow {
  display: none;
}
.books {
  display: flex;
  width: 100%;
  margin-bottom: 9.6rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 23px;
    color: var(--text-gray);
    font-size: 12px;
    font-weight: 500;
    text-transform: capitalize;
    min-width: 190px;
    position: relative;
    height: fit-content;
    margin-right: -25px;

    &::before {
      content: '';
      display: inline-block;
      background-color: var(--primary-light-color);
      position: absolute;
      left: -1000px;
      right: -6rem;
      top: -4.5rem;
      bottom: -8.1rem;
      z-index: -1;
    }

    li:hover {
      cursor: pointer;
    }
    li.active {
      color: var(--text-black);
      font-size: 1.6rem;
      font-weight: 700;
      text-transform: capitalize;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        left: -20px;
        top: 50%;
        transform: translateY(-50%);
        display: inline-block;
        width: 6px;
        height: 6px;
        background: #756ad3;
        border-radius: 50%;
      }
    }
  }
}
.carts {
  display: flex;
  flex-direction: column;
  width: 100%;
  &-list {
    display: flex;
    flex-wrap: wrap;
    gap: 92px 36px;
    justify-content: space-between;
    margin-bottom: 9.6rem;
  }

  button {
    border: 1px solid var(--primary-color);
    text-transform: uppercase;
    padding: 17px 61px;
    margin-bottom: 96px;
    width: max-content;
    transition: all 200ms linear;
    color: var(--primary-color);
    font-size: 8px;
    font-weight: 700;
    margin: 0 auto;

    &:hover {
      color: #fff;
      background: var(--primary-color);
    }

    &:disabled {
      background: none;
      border-color: var(--text-gray);
      color: var(--text-gray);
      cursor: auto;
    }
  }
}

@media (max-width: 1150px) {
  .books {
    ul {
      min-width: 165px;
      margin-right: 0;
    }
  }

  .carts-list {
    gap: 20px 10px;
  }
}

@media (max-width: 1025) {
  .books {
    ul {
      min-width: 120px;
    }
  }
}

@media (max-width: 860px) {
  section {
    position: relative;
  }
  .genres-arrow {
    display: block;
    width: max-content;
    position: absolute;
    background-color: var(--primary-light-color);
    padding: 10px;
    padding-left: 10px;
    left: 0;
    top: -45px;
    border-radius: 0 10px 10px 0;
    z-index: 2;
    border: 1px #fff solid;
    font-size: 10px;
    font-weight: 700;

    &:hover {
      cursor: pointer;
    }
  }

  .books {
    position: relative;

    ul {
      position: absolute;
      top: 20px;
      z-index: 1;
      margin-left: 15px;
      gap: 15px;
      transform: translateX(-229px);
      transition: all 400ms linear;
      font-size: 10px;

      &::before {
        top: -20px;
      }

      li.active {
        font-size: 12px;

        &::before {
          left: -10px;
        }
      }
    }
  }
}
</style>
