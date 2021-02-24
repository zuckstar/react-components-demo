import React, { useState, useEffect, useRef, useContext } from 'react'
import useMousePosition from '../hooks/useMousePosition'
import { ThemeContext } from '../views/Context'
const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0)
  const likeRef = useRef(0)
  const didMountRef = useRef(false)
  const domRef = useRef<HTMLInputElement>(null)
  const theme = useContext(ThemeContext)

  const style = {
    background: theme.background,
    color: theme.color
  }

  const [on, setOn] = useState(true)
  const positions = useMousePosition()

  useEffect(() => {
    document.title = `点击了${like}次`
  }, [like])

  useEffect(() => {
    if(didMountRef.current) {
      console.log('this is updated')
    } else {
      didMountRef.current = false
    }
  })

  useEffect(() => {
    if(domRef && domRef.current) {
       domRef.current.focus()
    }
  })
  function handleAlertClick() {
    setTimeout(()=>{
      alert('you clicked on' + likeRef.current)
    })
  }
  return (
    <>
      <input type="text" ref={domRef} />
      <h2>X: {positions.x}, Y: {positions.y}</h2>
      <button style={style} onClick={() => {setLike(like + 1); likeRef.current++ }}>
        {like} 👍🏻
      </button>
      <button onClick={() => {setOn(!on)}}>
        {on ? 'ON' : 'OFF'} 
      </button>

      <button onClick={handleAlertClick}>Alert!</button>
    </>
  )
}
export default LikeButton
