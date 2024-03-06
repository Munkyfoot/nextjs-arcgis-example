import dynamic from "next/dynamic"

const DynamicMap = dynamic(() => import("./arcgis-map"), {
  ssr: false,
})

export default () => <DynamicMap />
