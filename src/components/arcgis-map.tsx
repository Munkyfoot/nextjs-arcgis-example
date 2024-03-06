"use client"

import esriConfig from "@arcgis/core/config"
import Map from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"
import { useEffect, useRef } from "react"

export default function ArcGISMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    esriConfig.apiKey = process.env.NEXT_PUBLIC_ARCGIS_API_KEY || ""

    const arcgisMap = new Map({
      basemap: "arcgis/topographic",
    })

    const mapView = new MapView({
      map: arcgisMap,
      container: mapRef.current || undefined,
      zoom: 4,
      center: [15, 65],
    })

    return () => {
      mapView.destroy()
    }
  }, [mapRef])

  return <div className="w-full aspect-square bg-black/50" ref={mapRef} />
}
