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
  return Object.keys(pointers).reduce((prev: Array<any>, cur) => {
    const temp = pointers[cur].reduce((prevArr: Array<any>, curPoint: any) => {
      const { clickx, clicky } = curPoint
      const domRect = document.getElementById(cur)?.getBoundingClientRect()
      const x = domRect?.left! + clickx
      const y = domRect?.top! + clicky
      return [...prevArr, { x, y }]
    }, [])
    return prev.concat(temp)
  }, [])
}
