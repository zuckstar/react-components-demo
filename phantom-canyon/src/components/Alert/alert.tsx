import React, {useState} from 'react'
import classNames from 'classnames'

export enum AlertType {
  Success = 'success',
  Default = 'default',
  Danger = 'danger',
  Warning = 'warning'
}

interface AlertProps {
  className ?: string;
  title ?: string;
  message ?: string;
  alertType ?: AlertType;
  closeable ?: boolean;
}

const Alert: React.FC<AlertProps> = (props) => {
  const {
    alertType,
    title,
    message,
    closeable,
    className
  } = props

  const classes = classNames('alert', className, {
    [`alert-${alertType}`]: alertType
  })

  const [show, setShow] = useState(true);

  let onCloseBtnClick = ()=>{
    setShow(false)
  }

  return (
    <div className={classes} style={{display: show ? 'block' : 'none'}}>
      <div className="title">
        { title }
        { closeable ? <span className="close-btn" onClick={onCloseBtnClick}>X</span> : null}
      </div>
      <div className="message">
        { message }
      </div>
    </div>
  )
}

Alert.defaultProps = {
  alertType: AlertType.Default,
  closeable: false
}

export default Alert
