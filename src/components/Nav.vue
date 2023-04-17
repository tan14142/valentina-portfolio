<script setup lang="ts">
import { ref, watch } from "vue"
import { useRoute } from "vue-router"
import SearchBar from "./SearchBar.vue"

const inputRef = ref()
const route = useRoute()
const paths = ["about", "projects", "gallery", "contact"]
</script>

<template>
  <nav>
    <input id="input-burger" ref="inputRef" title="menu" type="checkbox" />
    <label for="input-burger">
      <div class="bar-burger"></div>
      <div class="bar-burger"></div>
      <div class="bar-burger"></div>
    </label>
    <ul>
      <li>
        <router-link @click="inputRef.checked = false" to="/">
          <svg
            height="28px"
            width="28px"
            fill="black"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <span>home</span>
        </router-link>
      </li>
      <li v-for="path in paths">
        <router-link
          @click="inputRef.checked = false"
          :class="{ selected: route.path.slice(1) === path }"
          :to="`/${path}`"
          >{{ path }}</router-link
        >
      </li>
    </ul>
    <SearchBar />
  </nav>
</template>

<style scoped>
nav {
  background: #d0d0d0;
  display: flex;
  flex-direction: column;
  position: relative;
}

input {
  display: none;
}

label {
  cursor: pointer;
  display: block;
  padding: 0.75rem 1rem;
  width: 1.5rem;
  transition: opacity 0.33s ease-out;
}

input:checked + label > div:nth-child(1) {
  transform: rotate(45deg);
  transform-origin: 17.5%;
}

input:checked + label > div:nth-child(2) {
  opacity: 0;
}

input:checked + label > div:nth-child(3) {
  transform: rotate(-45deg);
  transform-origin: 17.5%;
}

input:checked ~ label {
  background: #000;
  opacity: 0.5;
  position: absolute;
  height: calc(100vh - 1.5rem);
  width: calc(100% - 2rem);
  z-index: 0;
}

input:checked ~ ul {
  margin-top: 2.5rem;
  max-height: 100vh;
}

input:checked ~ div {
  display: none;
}

.bar-burger {
  border-radius: 0.5rem;
  height: 0.15rem;
  width: 1.25rem;
  margin: 0.15rem;
  background: black;
  transition: transform 0.33s ease-out;
}

input:checked ~ label .bar-burger {
  background: #d0d0d0;
}

svg {
  display: none;
  transform: scale(1.5);
}

ul {
  background: #d0d0d0;
  display: flex;
  flex-direction: column;
  max-height: 0;
  overflow: hidden;
  position: relative;
  transition: max-height 0.33s ease-out;
  text-align: center;
  z-index: 1;
}

ul > li {
  list-style: none;
}

ul > li > a {
  display: block;
  padding: 0.75rem 1rem;
  color: black;
  text-decoration: none;
}

ul > li > a:active,
ul > li > a:hover {
  background: #bbb;
}

.selected {
  background: #aaa;
  font-weight: bold;
  text-decoration: underline;
}

@media screen and (min-width: 768px) {
  label {
    display: none;
  }
  ul {
    flex-direction: row;
    margin-top: 0 !important;
    max-height: none !important;
  }
  svg {
    display: block;
  }
  svg + span {
    display: none;
  }
}
</style>
