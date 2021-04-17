import React, { FC, useState, ChangeEvent, KeyboardEvent, ReactElement, useEffect, useRef } from 'react'
import classNames from 'classnames'
import Input, { InputProps } from '../Input/input'
import Icon from '../Icon/icon'
import useDebounce from '../../hooks/useDebounce'
import useClickOutside from '../../hooks/useClickOutside'
import Transition from '../Transition/transition'

interface DataSourceObject {
  value: string
}
// 返回交叉类型
export type DataSourceType<T = {}> = T & DataSourceObject

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (keyword: string) => DataSourceType[] | Promise<DataSourceType[]>
  onSelect?: (item: DataSourceType) => void
  renderOption?: (item: DataSourceType) => ReactElement
}

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const {
    fetchSuggestions,
    onSelect,
    value,
    renderOption,
    ...restProps
  } = props

  const [inputValue, setInputValue] = useState(value as string)
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([])
  const [loading, setLoading] = useState(false)
  const [highlightIndex, setHighlightIndex] = useState(-1)
  const [ showDropdown, setShowDropdown] = useState(false)

  const triggerSearch = useRef(false)
  const componentRef = useRef<HTMLDivElement>(null)
  const debouncedValue = useDebounce(inputValue, 500)
  useClickOutside(componentRef, () => { setSuggestions([])})

  useEffect(()=> {
    if(debouncedValue && triggerSearch.current) {
      setSuggestions([])
      const results = fetchSuggestions(debouncedValue)
      if(results instanceof Promise) {
        // 处理异步回调数据
        setLoading(true)
        results.then(data => {
          setLoading(false)
          setSuggestions(data)
          if(data.length > 0) {
            setShowDropdown(true)
          }
        })
      } else {
        // 处理同步数据
        setSuggestions(results)
        setShowDropdown(true) 
        if(results.length > 0) {
          setShowDropdown(true)
        }
      }
    } else {
      setShowDropdown(false)
    }
    setHighlightIndex(-1)
  }, [debouncedValue])

  const highlight = (index: number) => {
    if(index < 0) index = 0
    if(index >= suggestions.length) {
      index = suggestions.length - 1
    }
    setHighlightIndex(index)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch(e.key) {
      case 'Enter': 
        if(suggestions[highlightIndex])
          handleSelect(suggestions[highlightIndex])
        break;
      case 'ArrowUp': 
        highlight(highlightIndex - 1)
        break;
      case 'ArrowDown': 
        highlight(highlightIndex + 1)
        break;
      case 'Escape': 
        setSuggestions([])
        break;
      default: break;
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    triggerSearch.current = true
  }

  const handleSelect = (item: DataSourceObject) => {
    setInputValue(item.value)
    setShowDropdown(false)
    if(onSelect) {
      onSelect(item)
    }
    triggerSearch.current = false
  }

  const renderTemplate = (item: DataSourceObject) => {
    return renderOption ? renderOption(item) : item.value
  }

  const generateDropdown = () => {
    return (
      <Transition
        in={showDropdown || loading}
        animation="zoom-in-top"
        timeout={300}
        onExited={()=>{setSuggestions([])}}
      >
      <ul className="zuck-suggestion-list">
        { loading &&
            <div className="suggstions-loading-icon">
              <Icon icon="spinner" spin/>
            </div>
        }
        {suggestions.map((item, index)=>{
          const cnames = classNames('suggestion-item', {
            'is-active': index === highlightIndex
          })
          return (
            <li key={index} onClick={()=>handleSelect(item)} className={cnames}>
              {renderTemplate(item)}
            </li>
          )
        })}
      </ul>
      </Transition>
    )
  }
  return (
    <div className="zuck-auto-complete" ref={componentRef}>
      <Input
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...restProps} 
      />
      {generateDropdown()}
    </div>
  )
}
