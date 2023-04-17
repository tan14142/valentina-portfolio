<script setup lang="ts">
import Links from "@/components/Links.vue"
import Lightbox from "@/components/Lightbox.vue"
import Images from "@/constants/Gallery.json"
</script>

<template>
  <main>
    <section>
      <h1>gallery</h1>
      <Links />
      <div id="gallery">
        <Lightbox v-for="image in Images" :="image" />
      </div>
    </section>
  </main>
</template>

<style scoped>
h1 {
  border-bottom: 1vmin solid black;
  font-size: 8vmin;
  padding-bottom: 1vmin;
}

#gallery {
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  padding: 0.5rem;
}

@media (min-width: 576px) {
  #gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  #gallery {
    grid-template-columns: repeat(3, 1fr);
  }

  h1,
  h1 + div {
    display: none;
  }
}

@media (min-width: 992px) {
  #gallery {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1200px) {
  #gallery {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media (min-width: 1600px) {
  #gallery {
    grid-template-columns: repeat(8, 1fr);
  }
}
</style>
