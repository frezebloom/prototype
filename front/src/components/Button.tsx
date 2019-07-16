import * as React from 'react';

import '../styles/button.scss'

interface ButtonProps {
  name: string
}

const Button: React.FC<ButtonProps> = ({ name }) => {
  return (
    <div className="btn">
      {name}
    </div>
  )
}

export default Button