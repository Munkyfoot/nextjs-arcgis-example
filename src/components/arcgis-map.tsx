"use client"

import esriConfig from "@arcgis/core/config"
import Map from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

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
    <div className="w-full h-full flex-grow flex flex-col space-y-4">
      <div
        className="flex-grow bg-black/50 rounded-md overflow-hidden"
        ref={mapDivRef}
      />
      <div className="flex flex-wrap gap-4">
        <Button
          variant={mapType === "satellite" ? "default" : "outline"}
          onClick={() => setMapType("satellite")}
        >
          Satellite
        </Button>
        <Button
          variant={mapType === "topo" ? "default" : "outline"}
          onClick={() => setMapType("topo")}
        >
          Topo
        </Button>
        <Button
          variant={mapType === "streets" ? "default" : "outline"}
          onClick={() => setMapType("streets")}
        >
          Streets
        </Button>
      </div>
    </div>
  )
}
