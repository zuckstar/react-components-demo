import React, { useState, useEffect } from 'react'

const MouseTracker: React.FC = () => {
  const [positions, setPositions] = useState({x: 0, y: 0})

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      console.log('inner, update positions')
      setPositions({ x: e.clientX, y: e.clientY})
    }
    console.log('add effect')
    document.addEventListener('click', updateMouse)

    return () => {
      console.log('remove effect')
      document.removeEventListener('click', updateMouse)
    }
  }, [])
  console.log('before render', positions.x)
  return (
    <p>X: {positions.x}, Y: {positions.y}</p>
  )
}

export default MouseTracker
