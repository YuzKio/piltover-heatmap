import { requestHeatmapClickPoint } from "../../api/request"

enum pointerId {
  CLICK = 5,
}

// 数据上报
export const handleDataReport = (e: MouseEvent, domId: string) => {
  handleClickEventReport(e, domId)
}

const handleClickEventReport = (e: MouseEvent, domId: string) => {
  const clickDom = document.querySelector(`[data-tracking="${domId}"]`)
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
const getPointers = async (range?: Array<number>) => {
  return (
    await requestHeatmapClickPoint({
      pointId: pointerId.CLICK,
      startTime: range?.[0],
      endTime: range?.[1],
    })
  ).data
}

// 数据处理
// 取到的数据结构：
/* 
{
  [domId]: {
    [index]: {
      clickx: number,
      clicky: number
      max: number
    }
  }
} */
export const getPointerData = async (range: Array<number>) => {
  const pointers = await getPointers(range)
  const pointerData: Array<any> = []
  Object.keys(pointers).forEach((cur) => {
    // 按domId分组遍历，计算该dom结点的位置
    const curDom = document.querySelector(`[data-tracking="${cur}"]`)
    if (!curDom) return
    const domRect = curDom.getBoundingClientRect()
    const domLeft = domRect?.left!
    const domTop = domRect?.top!
    // 遍历该dom结点的点击数据
    Object.values(pointers[cur]).forEach((curPoint: any) => {
      // 计算该点击数据的位置
      const x = domLeft + curPoint.clickx
      const y = domTop + curPoint.clicky
      // 将该点击数据的位置和次数存入数组
      pointerData.push({ x, y, max: curPoint.max })
    })
  })
  console.log(pointerData.length)
  return pointerData
}
