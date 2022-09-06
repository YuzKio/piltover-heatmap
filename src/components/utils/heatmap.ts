const pointerStore: Array<Record<string, any>> = []

export const storePointer = (data: Record<string, any>) => {
  pointerStore.push(data)
}

export const getPointers = async () => {
  return pointerStore
}

export const getPointerData = async () => {
  const pointers = await getPointers()
  const domMap = new Map()
  return pointers.reduce((prev, pointer) => {
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