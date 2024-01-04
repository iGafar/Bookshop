import { defineStore } from 'pinia';
import { ref, onMounted } from 'vue';

export const useRootStore = defineStore('root', () => {
  const basket = ref([]);

  function addToBasket(id) {
    basket.value.push(id);
    saveToLocalStorage();
  }
  function removeFromBasket(value) {
    const index = basket.value.indexOf(value);
    if (index !== -1) {
      basket.value.splice(index, 1);
      saveToLocalStorage();
    }
  }

  onMounted(() => {
    const storedBasket = localStorage.getItem('basket');
    if (storedBasket) {
      basket.value = JSON.parse(storedBasket);
    }
  });

  function saveToLocalStorage() {
    localStorage.setItem('basket', JSON.stringify(basket.value));
  }

  return { basket, addToBasket, removeFromBasket };
});
