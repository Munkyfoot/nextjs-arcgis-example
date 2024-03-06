"use client"

import esriConfig from "@arcgis/core/config"
import Map from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"
import { useEffect, useRef, useState } from "react"

export default function ArcGISMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  const [mapType, setMapType] = useState<"satellite" | "topo" | "streets">(
    "satellite"
  )

  const [zoom, setZoom] = useState(4)
  const [center, setCenter] = useState<[number, number]>([0, 0])

  useEffect(() => {
    esriConfig.apiKey = process.env.NEXT_PUBLIC_ARCGIS_API_KEY || ""

    const arcgisMap = new Map({
      basemap: mapType,
    })

    const mapView = new MapView({
      map: arcgisMap,
      container: mapRef.current || undefined,
      zoom: zoom,
      center: center,
    })

    // Update zoom and center when map is zoomed
    mapView.on("mouse-wheel", () => {
      setZoom(mapView.zoom)
      setCenter([mapView.center.longitude, mapView.center.latitude])
    })

    // Update center when map is moved
    mapView.on("drag", () => {
      setCenter([mapView.center.longitude, mapView.center.latitude])
    })

    return () => {
      mapView.destroy()
    }
  }, [mapRef, mapType])

  return (
    <div className="w-full flex flex-col space-y-4">
      <div className="w-full aspect-square bg-black/50" ref={mapRef} />
      <div className="flex space-x-4">
        <button
          className="bg-primary text-primary-foreground rounded-lg px-4 py-2"
          onClick={() => setMapType("satellite")}
        >
          Satellite
        </button>
        <button
          className="bg-primary text-primary-foreground rounded-lg px-4 py-2"
          onClick={() => setMapType("topo")}
        >
          Topo
        </button>
        <button
          className="bg-primary text-primary-foreground rounded-lg px-4 py-2"
          onClick={() => setMapType("streets")}
        >
          Streets
        </button>
      </div>
    </div>
  )
}
