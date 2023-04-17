<script setup lang="ts">
import { ref } from "vue"
import Links from "@/components/Links.vue"
import Logo from "@/components/Logo.vue"

const nameRef = ref()
const subjectRef = ref()
const bodyRef = ref()

function submit() {
  const secret = [
    110, 111, 114, 101, 112, 108, 121, 64, 101, 120, 97, 109, 112, 108, 101, 46,
    99, 111, 109,
  ]
    .map(val => String.fromCharCode(val))
    .join("")
  window.location.href = `mailto:${secret}?subject=${subjectRef.value.value}&body=${bodyRef.value.value}%0D%0A%0D%0ARegards%0D%0A${nameRef.value.value}`
}
</script>

<template>
  <main>
    <Logo />
    <section>
      <span>Have some questions?</span>
      <span>Or want to reach out?</span>
      <Links />
      <form>
        <div class="input-wrapper">
          <input ref="nameRef" placeholder=" " title="name" />
          <label @click="nameRef.focus()" for="name">Enter your name</label>
        </div>
        <div class="input-wrapper">
          <input ref="subjectRef" placeholder=" " title="subject" />
          <label @click="subjectRef.focus()" for="subject"
            >Enter your subject</label
          >
        </div>
        <div class="input-wrapper">
          <textarea ref="bodyRef" placeholder=" " title="body" />
          <label @click="bodyRef.focus()" for="body">Enter your message</label>
        </div>
        <button @click="submit" type="button">Send</button>
      </form>
    </section>
  </main>
</template>

<style scoped>
span {
  font-weight: bold;
}

span:nth-child(2) {
  margin-bottom: 0.5rem;
}

.input-wrapper {
  position: relative;
  margin-top: 1rem;
  z-index: 1;
}

label {
  font-size: 0.66rem;
  left: 0.33rem;
  position: absolute;
  top: 0.6rem;
  z-index: 0;
  transition: all 0.33s ease-out;
}

.input-wrapper:hover > label,
.input-wrapper:focus-within > label,
input:not(:placeholder-shown) + label,
textarea:not(:placeholder-shown) + label {
  font-size: 0.5rem;
  left: 0;
  top: -0.66rem;
}

input,
textarea {
  background: #d0d0d0;
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.6);
  font-size: 0.85rem;
  padding: 0.5rem;
  width: calc(100% - 1rem);
}

textarea {
  height: 8rem;
}

button {
  background: #dedc00;
  float: right;
  font-size: 0.66rem;
  margin-top: 1rem;
  padding: 0.25rem 1.25rem;
  cursor: pointer;
}

@media (min-aspect-ratio: 3/2) {
  main {
    flex-direction: row-reverse;
    justify-content: center;
    overflow: hidden;
  }

  section {
    align-items: initial;
    flex: 0.5;
    padding-left: 10vw;
  }

  span {
    font-size: 2.5vw;
  }
}
</style>
