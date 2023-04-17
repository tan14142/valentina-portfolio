import { createApp } from "vue/dist/vue.esm-bundler.js"
import App from "./App.vue"
import Router from "./Router"
import "./main.css"

const app = createApp(App)
app.use(Router)
app.mount("#app")
