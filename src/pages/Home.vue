<script setup lang="ts">
import Links from "@/components/Links.vue"
import Logo from "@/components/Logo.vue"
</script>

<template>
  <main>
    <Logo />
    <section>
      <h1>hi.</h1>
      <p>I'm Valentina.</p>
      <p>graphic designer and illustrator</p>
      <Links />
    </section>
  </main>
</template>

<style scoped>
section {
  margin-top: 10vmin;
}

h1 {
  border: 0;
  font-size: 45vmin;
  line-height: 35vmin;
  padding: 0;
  text-shadow: 0 8px 8px rgba(0, 0, 0, 0.33);
}

p:nth-child(2) {
  font-size: 8vmin;
  text-shadow: 0 8px 8px rgba(0, 0, 0, 0.33);
}

p:nth-child(3) {
  color: #888;
}

@media (min-aspect-ratio: 3/2) {
  main {
    flex-direction: row-reverse;
    justify-content: center;
    overflow: hidden;
  }

  section {
    align-items: initial;
    padding-left: 10vw;
  }

  h1 {
    font-size: 45vmin;
    line-height: 35vmin;
    transform: translateX(-3vmin);
  }

  p:nth-child(2) {
    font-size: 8vmin;
  }

  p:nth-child(3) {
    font-size: 3.5vmin;
  }
}
</style>
