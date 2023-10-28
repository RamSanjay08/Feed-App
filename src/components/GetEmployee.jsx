import React from 'react'
import ImageEmployee from './ImageEmployee'
import DetailsEmployee from './DetailsEmployee'

import empstyle from '../CSS/employee.module.css'

export default function ({id,image,ename,age,role}) {
  return (
    <div className={empstyle.subcontainer}>
      <ImageEmployee image={image} />
      <DetailsEmployee sname={ename} age={age} role={role} />
     
      
    </div>
  )
}
