import dynamic from "next/dynamic"

const DynamicMap = dynamic(() => import("./arcgis-map"), {
  ssr: false,
})

const DynamicMapComponent = () => <DynamicMap />

export default DynamicMapComponent
