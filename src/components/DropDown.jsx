import React, { useState } from 'react'
import empstyle from '../CSS/employee.module.css'

export default function DropDown({bio,ename}) {
  let [isbool,Setisbool] = useState(false)

  let toogleDrop = ()=> {
    Setisbool(!isbool)
  }

  return (
    <>
    <div className={empstyle.bioMain}>
      <div className={empstyle.bioSection}>
      <h2>{ename}</h2>
      {isbool?<i  onClick={toogleDrop} class="fa-solid fa-circle-arrow-up"></i>:<i onClick={toogleDrop} class="fa-solid fa-circle-arrow-down"></i>}
      </div>
      <div>
        <p>{isbool?bio:""}</p>
      </div>
    </div>
    </>
  )
  
  
}
