<script setup lang="ts">
import { onMounted, ref, watch, watchEffect } from "vue"

const props = defineProps({
  alt: String,
  src: String,
})

const isOpen = ref(false)
const imgRef = ref<HTMLImageElement>()

watch(isOpen, cur => {
  if (cur) {
    imgRef.value?.classList.add("hide")
    setTimeout(() => {
      imgRef.value?.classList.remove("hide")
    }, 0)
  }
})

watchEffect(() => {
  window.addEventListener("resize", handleResize)
  return () => {
    window.removeEventListener("resize", handleResize)
  }
})

function handleResize() {
  if (imgRef.value === null) {
    return
  }

  const imgRatio = imgRef.value!.naturalWidth / imgRef.value!.naturalHeight
  const winRatio = window.innerWidth / window.innerHeight
  let limit = 1

  if (window.innerWidth >= 576) limit = 2
  if (window.innerWidth >= 768) limit = 3
  if (window.innerWidth >= 992) limit = 4
  if (window.innerWidth >= 1200) limit = 6
  if (window.innerWidth >= 1600) limit = 8

  imgRef.value!.parentElement!.style.gridArea =
    imgRatio >= 1
      ? "span 1 / span " + Math.min(Math.round(imgRatio), limit)
      : "span " + Math.round(1 / imgRatio) + " / span 1"

  imgRef.value!.classList.remove("fill-width")
  imgRef.value!.classList.remove("fill-height")
  imgRef.value!.classList.add(
    imgRatio > winRatio ? "fill-width" : "fill-height",
  )
}
</script>

<template>
  <div @click="isOpen = !isOpen" :class="isOpen ? 'overlay' : 'static'">
    <img @load="handleResize" :="props" ref="imgRef" />
  </div>
</template>

<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.static {
  border-radius: 1rem;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.6);
}

img {
  border-radius: 1rem;
  display: block;
}

.static > img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.hide {
  max-width: 0;
}

.overlay > img:not(.hide) {
  border: 0.125rem solid white;
  transition: max-width 0.33s ease-out;
  max-width: calc(100vw - 2rem);
}

.overlay > img.fill-height {
  height: calc(100vh - 2rem);
}

.overlay > img.fill-width {
  width: calc(100vw - 2rem);
}
</style>
