import React, { FC, ReactElement, InputHTMLAttributes, ChangeEvent } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import classNames from 'classnames'
import Icon from '../Icon/icon'

type InputSize = 'lg' | 'sm'
// 利用 Omit 忽略掉 InputHTMLAttributes 的一些属性
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  /**是否禁用 Input*/ 
  disabled?: boolean,
  /**设置 Input 大小，支持 lg/sm*/
  size?: InputSize;
  /**添加图标，在右侧悬浮添加一个图标，用于提示*/
  icon?: IconProp;
  /**添加前缀，用于配置一些固定组合*/
  prepend?: string | ReactElement;
  /**添加后缀，用于配置一些固定组合*/
  append?: string | ReactElement;
  // 重新定义 onChange 的类型
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void; 
}

/**
 * Input 输入框 通过鼠标或键盘输入内容，是最基础的表单域的包装。
 * 
 * ~~~js
 * // 引用方式
 * import { Input } from 'vikingship'
 * ~~~
 * 支持 HTMLInput 的所有基本属性
 */
export const Input: FC<InputProps> = (props) => {
  // 取出各种的属性
  const {
    disabled,
    size,
    icon,
    prepend,
    append,
    style,
    ...restProps
  } = props

  // 根据属性计算不同的 className
  const cnames = classNames('zuck-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-diabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend,
  })
  const fixControlledValue = (value: any) => {
    if(typeof value === 'undefined' || value === null) {
      return ''
    }
    return value
  }
  if('value' in props) {
    Reflect.deleteProperty(restProps, 'defaultValue')
    restProps.value = fixControlledValue(props.value)
  }
  return (
    // 根据属性判断是否要添加特定的节点
    <div className={cnames} style={style}>
      {prepend && <div className="zuck-input-group-prepend">{prepend}</div>}
      {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`}/></div>}
      <input 
        className="zuck-input-inner"
        disabled={disabled}
        {...restProps}
      />
      {append && <div className="zuck-input-group-append">{append}</div>}
    </div>
  )
}

export default Input;
