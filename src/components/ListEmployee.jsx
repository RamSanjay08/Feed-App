import React, { Fragment } from 'react'
import ObjEmployee from './ObjEmployee'
import GetEmployee from './GetEmployee'
import DropDown from './DropDown'
import empstyle from '../CSS/employee.module.css'

export default function ListEmployee() {
  return (
    <>
    <h1 className={empstyle.title}>World Cup 2023 Squad</h1>
    <div className={empstyle.container}>
      {ObjEmployee.map((employee) => {
        return <GetEmployee {...employee}/>
      })}
    </div>

    <div>
      <h1 className={empstyle.squadDetails}>Squad Details</h1>
      {ObjEmployee.map(({bio,id,ename}) => {
        return <DropDown key={id} ename={ename} bio={bio}/>
      })}
    </div>
    </>
  )
}

ListEmployee.defaultProps = {
  image: 'https://demofree.sirv.com/nope-not-here.jpg'
}
