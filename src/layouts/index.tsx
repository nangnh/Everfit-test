import React from "react"

interface LayoutITF {
  children: React.ReactNode
}

const MainLayout = (props: LayoutITF) => {
  const { children } = props

  return (
    <div className="app-layout">{children}</div>
  )
}

export default MainLayout