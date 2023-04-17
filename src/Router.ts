import { createRouter, createWebHistory } from "vue-router"
import Home from "./pages/Home.vue"
import Projects from "./pages/Projects.vue"
import Gallery from "./pages/Gallery.vue"
import About from "./pages/About.vue"
import Contact from "./pages/Contact.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/projects", component: Projects },
  { path: "/gallery", component: Gallery },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
