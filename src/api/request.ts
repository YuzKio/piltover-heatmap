import { lyla } from "lyla"

const request = lyla.extend({
  baseUrl: "http://localhost:8015/own",
})

export async function requestHeatmapClickPoint(params: {
  pointId: number
  route: string
  startTime?: number
  endTime?: number
}) {
  return (
    await request({
      url: "/heatmapClickPoint",
      method: "post",
      json: params,
    })
  ).json
}
