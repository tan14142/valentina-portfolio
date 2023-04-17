<script setup lang="ts">
import Links from "@/components/Links.vue"
import Project from "@/components/Project.vue"
import projects from "@/constants/Projects.json"
</script>

<template>
  <main>
    <section>
      <h1>projects</h1>
      <Links />
      <div>
        <Project v-for="project in projects" :="project" />
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

section > div:nth-child(3) {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media (min-width: 768px) {
  h1,
  h1 + div {
    display: none;
  }
}
</style>
