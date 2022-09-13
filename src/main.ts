import { createApp } from "vue"
import App from "./App.vue"
import naive from "naive-ui"
import { handleDataReport } from "./components/Heatmap/utils"

const app = createApp(App)

app.directive("tracking", {
  mounted(el, params) {
    const id = params.value
    if (!el.getAttribute("data-tracking")) {
      el.setAttribute("data-tracking", id)
    }
    el.addEventListener("click", (e: any) => {
      handleDataReport(e, id)
      e.stopPropagation()
    })
  },
})

app.use(naive).mount("#app")
