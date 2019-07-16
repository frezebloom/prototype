import * as React from 'react'

import Button from './Button';

import "../styles/cornerDialog.scss"; 

interface CornerDialogProps {
  title: string,
  message: string,
  handleClickClose: () => void
}

const CornerDialog: React.FC<CornerDialogProps> = props => {
  
  const eventClick = () => props.handleClickClose()
  
  return (
    <div className="corner-dialog">
      
      <div className="corner-dialog-wrapper">

        <div className="corner-dialog-header">
          <div className="corner-dialog-title">
            {props.title}
          </div>
          <div className="corner-dialog-close-wrapper">
            <div className="corner-dialog-close" onClick={() => eventClick()}>X</div>
          </div>
        </div>

        <div className="corner-dialog-message">
          {props.message}
        </div>

        <div className="corner-dialog-footer">
          <div className="button-wrapper" onClick={() => eventClick()}>
            <Button name="ОК" />
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default CornerDialog