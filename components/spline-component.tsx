"use client"

import { useEffect } from "react"

export default function SplineComponent() {
  useEffect(() => {
    // Add the Spline Viewer script
    const script = document.createElement("script")
    script.type = "module"
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.96/build/spline-viewer.js"
    document.body.appendChild(script)

    return () => {
      // Clean up the script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="w-full h-full">
      <spline-viewer
        url="https://prod.spline.design/fmuuTYjvM42ofCUK/scene.splinecode"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  )
}
