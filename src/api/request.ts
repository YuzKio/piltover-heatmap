import { lyla } from "lyla"

const request = lyla.extend({
  baseUrl: "http://localhost:8015/own",
})

export async function requestHeatmapClickPoint(params: { pointId: number }) {
  return (
    await request({
      url: "/heatmapClickPoint",
      method: "post",
      json: params,
    })
  ).json
}
