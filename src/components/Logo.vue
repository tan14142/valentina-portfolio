<template>
  <aside>
    <img alt="logo-maca" src="/logo-maca.svg" />
  </aside>
</template>

<style scoped>
img {
  height: 90vmin;
  transform: rotate(-7.5deg);
}

@media (min-aspect-ratio: 3/2) {
  aside {
    flex: 1;
    height: 100%;
    position: relative;
  }

  img {
    position: absolute;
    bottom: -20vmin;
    right: 0;
  }
}
</style>
