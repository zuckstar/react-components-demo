import { RefObject, useEffect } from "react";

function useClickOutside(ref: RefObject<HTMLElement>, handler: Function) {
    useEffect(() => {
        const listener = (event: MouseEvent) => {
            // 保证当前 DOM 元素存在，且点击的元素在当前 DOM 的范围内则不执行 handler，否则执行 handler
            if(!ref.current || ref.current.contains(event.target as HTMLElement)) {
                return 
            }
            handler(event)
        }
        document.addEventListener('click', listener)
        return () => {
            document.removeEventListener('click', listener)
        }
    }, [ref, handler])
}

export default useClickOutside