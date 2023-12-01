import React from 'react'
import ImageEmployee from './ImageEmployee'
import DetailsEmployee from './DetailsEmployee'
import Cardicons from './Cardicons'

import empstyle from '../CSS/employee.module.css'

export default function ({id,image,ename,age,role}) {
  return (
    <div className={empstyle.subcontainer}>
      <div className={empstyle.iconHover}>
      <ImageEmployee image={image} />
      <Cardicons />
      </div>
      <DetailsEmployee sname={ename} age={age} role={role} />
     
    </div>
  )
}
