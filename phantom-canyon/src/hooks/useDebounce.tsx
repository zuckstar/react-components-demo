import React, {useEffect, useState} from 'react'
function useDebounce(value: any, delay = 300) {
    const [debounceValue, setDebouncedValue] = useState(value)
    useEffect(()=>{
        const handler = window.setTimeout(()=>{
            setDebouncedValue(value)
        }, delay)

        // 返回清除操作，effetHook 会在清除阶段执行以下函数，或者在新的 effect 调用前执行以下函数
        return () => {
            clearTimeout(handler)
        }

        // 只在 value 和 delay 更新的时候触发执行该 effect
    }, [value, delay])

    return debounceValue
}

export default useDebounce;