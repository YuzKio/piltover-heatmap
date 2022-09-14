import { createApp } from "vue"
import App from "./App.vue"
import naive from "naive-ui"
import router from "./router"
import { handleDataReport } from "./components/Heatmap/utils"

const app = createApp(App)

app.directive("tracking", {
  mounted(el, params) {
    const id = params.value.id
    const self = params.value.self
    if (!el.getAttribute("data-tracking")) {
      el.setAttribute("data-tracking", id)
      if (self) {
        el.setAttribute("data-tracking-self", true)
      }
    }

    el.addEventListener("click", (e: any) => {
      const target = e.target
      const targetId = target.getAttribute("data-tracking")
      const targetSelf = target.getAttribute("data-tracking-self")
      if (targetSelf && targetId !== params.value.id) {
        return
      } else {
        handleDataReport(e, id)
      }
    })
  },
})

app.use(naive).use(router).mount("#app")
