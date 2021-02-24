import React, { useEffect, useRef } from 'react'
const Ref: React.FC = () => {
  const domRef = useRef<HTMLInputElement>(null)
  const didMountRef = useRef(false)

  // useRef 返回的变量在组件的生命周期中不再改变，除非主动修改该对象的值
  useEffect(() => {
    if(didMountRef.current) {
      console.log('this is updated')
    } else {
      didMountRef.current = false
    }
  })

  // 可以使用 useRef 很方便地获取原始的 DOM 节点
  useEffect(() => {
    if(domRef && domRef.current) {
       domRef.current.focus()
    }
  })
  return (
    <div className="App">
      <input type="text" ref={domRef} />
    </div>
  );
}

export default Ref;
