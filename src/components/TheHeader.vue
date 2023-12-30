<script setup></script>
<template>
  <header>
    <div class="container">
      <span>Bookshop</span>
      <nav>
        <a href="#">books</a>
        <a href="#">audiobooks</a>
        <a href="#">Stationery & gifts</a>
        <a href="#">blog</a>
      </nav>
      <div>
        <span><img src="/src/assets/img/icons/user.svg" alt="user" /></span>
        <span><img src="/src/assets/img/icons/search.svg" alt="search" /></span>
        <span><img src="/src/assets/img/icons/shop-bag.svg" alt="shop" /></span>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: #fff;
  position: fixed;
  width: 100vw;
	z-index: 1;
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
      &:hover {
        color: var(--text-black);
        text-shadow:
          0 0.2px 0.3px var(--text-black),
          0 -0.2px 0.3px var(--text-black),
          0 0.2px 0.3px var(--text-black);
      }
    }
  }

  div {
    display: flex;
    gap: 4rem;

    span:hover {
      cursor: pointer;
    }
  }
}
</style>
