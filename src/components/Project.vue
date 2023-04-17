<script setup lang="ts">
import { PropType, ref } from "vue"

type ProjectImage = {
  alt: string
  src: string
}

const { title, desc, images } = defineProps({
  title: String,
  desc: String,
  images: Array as PropType<ProjectImage[]>,
})

const scrollRef = ref()

function scrollUp() {
  setTimeout(() => scrollRef.value.scrollIntoView({ behavior: "smooth" }), 10)
}
</script>

<template>
  <input :id="`input-projects-${title}`" :title="title" type="checkbox" />
  <label
    :for="`input-projects-${title}`"
    @click="scrollUp"
    title="click anywhere to close">
    <a ref="scrollRef" />
    <h2>{{ title }}</h2>
    <p>{{ desc }}</p>
    <img v-for="{ src, alt } in images" :src="src" :title="alt" />
  </label>
</template>

<style scoped>
input {
  display: none;
}

label {
  border-radius: 1rem;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  position: relative;
  cursor: pointer;
  text-align: center;
  max-height: 360px;
  overflow: hidden;
  transition: max-height 4s;
}

a {
  position: absolute;
  top: -1rem;
}

input:checked + label {
  padding: 1rem;
  max-height: 10000px;
}

h2 {
  color: white;
  font-size: 1.75rem;
  position: absolute;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.66);
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}

input:checked + label > h2 {
  color: black;
  margin-bottom: 1rem;
  position: unset;
}

p {
  display: none;
  user-select: none;
}

input:checked + label > p {
  display: inline;
  width: 100%;
}

img {
  border-radius: 1rem;
  filter: brightness(0.66);
  max-width: 80vw;
}

input:checked + label > img {
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.6);
  display: block;
  filter: none;
  margin-top: 1rem;
}

input:not(:checked) + label > img:first-of-type {
  max-width: 360px;
  width: 80vw;
  aspect-ratio: 1;
  object-fit: cover;
}

img:not(:first-of-type) {
  display: none;
}

@media (min-width: 768px) {
  input:checked + label > img {
    margin-right: 1rem;
  }
}

@media (min-width: 992px) {
  input:checked + label {
    justify-content: unset;
    text-align: left;
  }
}
</style>
