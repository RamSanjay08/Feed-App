import React from 'react'
import empstyle from '../CSS/employee.module.css'

export default function DetailsEmployee({sname,age,role}) {
  return (
    <div className={empstyle.details}>
      <h1>{sname}</h1>
      <div className={empstyle.subdetails}>
        <p>Age: {age}</p>
        <p>Role: {role}</p>
      </div>
    </div>
  )
}
