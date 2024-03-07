"use client"

import esriConfig from "@arcgis/core/config"
import Map from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"
import { useEffect, useRef, useState } from "react"

export default function ArcGISMap() {
  const mapDivRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<Map>()
  const mapViewRef = useRef<MapView>()

  const [mapType, setMapType] = useState<"satellite" | "topo" | "streets">(
    "satellite"
  )

  useEffect(() => {
    esriConfig.apiKey = process.env.NEXT_PUBLIC_ARCGIS_API_KEY || ""

    const arcgisMap = new Map({
      basemap: mapType,
    })

    mapRef.current = arcgisMap

    const mapView = new MapView({
      map: arcgisMap,
      container: mapDivRef.current || undefined,
      zoom: 4,
      center: [-98, 38],
    })

    mapViewRef.current = mapView

    return () => {
      mapView.destroy()
    }
  }, [mapDivRef])

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.set("basemap", mapType)
    }
  }, [mapType])

  return (
    <div className="w-full flex flex-col space-y-4">
      <div className="w-full aspect-square bg-black/50" ref={mapDivRef} />
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
