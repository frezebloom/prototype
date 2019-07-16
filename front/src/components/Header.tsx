import * as React from 'react'
import { Link } from "react-router-dom"

import "../styles/header.scss"; 

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return(
   
    <div className="header">
       <h1>{title}</h1>
    
          <Link to="/">Задачи</Link>
    

          <Link to="/token">Сшивка</Link>
  
    </div>
     
 
  )
}

export default Header