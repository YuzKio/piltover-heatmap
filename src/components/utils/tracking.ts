import { storePointer } from "./heatmap"

enum pointerId {
  CLICK = 5,
}

export const handleDataReport = (e:MouseEvent, domId: string) => {
  handleClickEventReport(e, domId)
} 

const handleClickEventReport  = (e:MouseEvent, domId: string) => {
  const clickDom = document.getElementById(domId)
  const domX = clickDom?.getBoundingClientRect().left
  const domY = clickDom?.getBoundingClientRect().top
  const data = {
    dom: domId,
    clickx: e.clientX - domX!,
    clicky: e.clientY - domY!,
  }
  // 上报数据
  storePointer(data)
  // webfunnyEvent(pointerId.CLICK).trackEvent(data)
}