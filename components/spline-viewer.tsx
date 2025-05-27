"use client"

import { useEffect } from "react"

export default function SplineViewer() {
  useEffect(() => {
    // Add the Spline Viewer script
    const script = document.createElement("script")
    script.type = "module"
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.96/build/spline-viewer.js"
    document.body.appendChild(script)

    return () => {
      // Clean up the script when component unmounts
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="w-full h-full">
      <spline-viewer url="https://prod.spline.design/cTcHb7uZ8YpQolRAsIYleUAh/scene.splinecode"></spline-viewer>
    </div>
  )
}
