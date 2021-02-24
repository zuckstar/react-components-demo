import React, { useState, useEffect } from 'react'


// 自定义 Hook 必须以 use 开头
const useMousePosition = () => {

  const [positions, setPositions] = useState({x: 0, y: 0})

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setPositions({ x: e.clientX, y: e.clientY})
    }
    document.addEventListener('mousemove', updateMouse)

    return () => {
      document.removeEventListener('mousemove', updateMouse)
    }
  }, [])

  return positions
}

export default useMousePosition
