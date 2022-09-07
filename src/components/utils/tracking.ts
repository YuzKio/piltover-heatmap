import { requestHeatmapClickPoint } from "../../api/request"

enum pointerId {
  CLICK = 5,
}

// 数据上报
export const handleDataReport = (e: MouseEvent, domId: string) => {
  handleClickEventReport(e, domId)
}

const handleClickEventReport = (e: MouseEvent, domId: string) => {
  const clickDom = document.getElementById(domId)
  const domX = clickDom?.getBoundingClientRect().left
  const domY = clickDom?.getBoundingClientRect().top
  const data = {
    dom: domId,
    clickx: e.clientX - domX!,
    clicky: e.clientY - domY!,
  }
  // 上报数据
  webfunnyEvent(pointerId.CLICK).trackEvent(data)
}

// 请求数据
const getPointers = async () => {
  return (await requestHeatmapClickPoint({ pointId: pointerId.CLICK })).data
}

// 数据处理
export const getPointerData = async () => {
  const pointers = await getPointers()
  const domMap = new Map()
  return pointers.reduce((prev: Array<any>, pointer: any) => {
    const { dom, clickx, clicky } = pointer
    let domInfo
    if (domMap.has(dom)) {
      domInfo = domMap.get(dom)
    } else {
      domInfo = document.getElementById(dom)
      domMap.set(dom, domInfo)
    }
    const domX = domInfo?.getBoundingClientRect().left
    const domY = domInfo?.getBoundingClientRect().top
    prev.push({
      x: clickx + domX!,
      y: clicky + domY!,
    })
    return prev
  }, [])
}
