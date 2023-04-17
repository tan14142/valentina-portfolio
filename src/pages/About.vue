<script setup lang="ts">
import Links from "@/components/Links.vue"
</script>

<template>
  <main>
    <aside>
      <img alt="logo-maca" src="/logo-maca.svg" />
    </aside>
    <section>
      <h1>
        Hi!
        <span>I'm Valentina.</span>
      </h1>
      <p>
        Imaginative, detail-oriented, and a versatile junior graphic designer
        with extensive experience working with both print and digital media.
      </p>
      <p>
        Experienced with design software, particularly with graphics editing
        software such as Photoshop, Illustrator and InDesign as well as with
        typography, photography and illustration.
      </p>
      <Links />
    </section>
  </main>
</template>

<style scoped>
section {
  margin-top: 5vmin;
  text-align: center;
  width: 65vmin;
}

h1 {
  font-size: 5vmin;
}

span {
  font-size: 5vmin;
  font-weight: lighter;
}

img {
  height: 50vmin;
  transform: rotate(-7.5deg);
}

@media (min-aspect-ratio: 3/2) {
  main {
    flex-direction: row-reverse;
    justify-content: center;
    overflow: hidden;
  }

  section {
    align-items: initial;
    text-align: initial;
    width: 90vmin;
  }
}
</style>
