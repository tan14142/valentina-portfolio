<template>
  <div>
    <a href="https://facebook.com">
      <img alt="logo-facebook" src="/logo-facebook.svg" />
    </a>
    <a href="https://linkedin.com">
      <img alt="logo-linkedin" src="/logo-linkedin.svg" />
    </a>
    <a href="https://behanced.com">
      <img alt="logo-behance" src="/logo-behance.svg" />
    </a>
  </div>
</template>

<style scoped>
div {
  display: flex;
  height: max(3vmin, 1rem);
  overflow: hidden;
}

a {
  border-radius: 25%;
  overflow: hidden;
}

a:nth-child(2) {
  margin: 0 max(1vmin, 0.25rem);
}

img {
  height: 100%;
}
</style>
