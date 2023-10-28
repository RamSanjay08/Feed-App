import React from 'react'
import empstyle from '../CSS/employee.module.css'

export default function ImageEmployee({image}) {
  return (
    <>
    <div>
      <img src={image} alt=""/>
    </div>
    </>
  )
}
