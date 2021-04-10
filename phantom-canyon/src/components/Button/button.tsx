import React, {FC, ButtonHTMLAttributes, AnchorHTMLAttributes} from 'react'
import classNames from 'classnames'

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

interface BaseButtonProps {
  className ?: string;
  /** 设置 Button 的禁用 */ 
  disabled ?: boolean;
  /** 设置 Button 的尺寸 */ 
  size ?: ButtonSize;
  /** 设置 Button 的类型 */ 
  btnType ?: ButtonType;
  children : React.ReactNode;
  href ?: string
}
// 使用联合类型
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

/**
 * 这是一个 Button 组件
 * ### 引用方法
 * ~~~js
 * import { Button } from 'react'
 * ~~~
 * */ 
export const Button: FC<ButtonProps> = (props) => {
  const {
    btnType,
    className,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props

  // btn, btn-lg, btn-primary
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled
  })

  if (btnType === ButtonType.Link && href) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}

// 默认值
Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button;
