import React, { FC, useState, ChangeEvent, KeyboardEvent, ReactElement, useEffect, useRef } from 'react'
import classNames from 'classnames'
import Input, { InputProps } from '../Input/input'
import Icon from '../Icon/icon'
import useDebounce from '../../hooks/useDebounce'

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
  const [ highlightIndex, setHighlightIndex] = useState(-1)
  const debouncedValue = useDebounce(inputValue, 500)

  useEffect(()=> {
    if(debouncedValue) {
      const results = fetchSuggestions(debouncedValue)
      if(results instanceof Promise) {
        setLoading(true)
        results.then(data => {
          setLoading(false)
          setSuggestions(data)
        })
      } else {
        setSuggestions(results)
      }
    } else {
      setSuggestions([])
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
    console.log(e.key)
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
  }
  const handleSelect = (item: DataSourceObject) => {
    setInputValue(item.value)
    setSuggestions([])
    if(onSelect) {
      onSelect(item)
    }
  }
  const renderTemplate = (item: DataSourceObject) => {
    return renderOption ? renderOption(item) : item.value
  }
  const generateDropdown = () => {

    return (
      <ul className="zuck-suggestion-list">
        {suggestions.map((item, index)=>{
          const cnames = classNames('suggestion-item', {
            'item-highlighted': index === highlightIndex
          })
          return (
            <li key={index} onClick={()=>handleSelect(item)} className={cnames}>
              {renderTemplate(item)}
            </li>
          )
        })}
      </ul>
    )
  }
  return (
    <div className="zuck-auto-complete">
      <Input
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...restProps} 
      />
      {loading && <ul><Icon icon="spinner" spin /></ul>}
      {(suggestions.length > 0) && generateDropdown()}
    </div>
  )
}
