import React, { useContext } from 'react'

import DashboardContext from '../../context/Dashboard/DashBoardContext'
import NonEvisaBox from './NonEvisaBox'

const NonEvisaDashboard = () => {

  const { nonEvisa } = useContext(DashboardContext)
  return (
    <div style={{height:"100%", overflow:"auto"}}>
        {nonEvisa.map((data) => {
          return <NonEvisaBox data={data}/>
          
        })}
    </div>
  )
}

export default NonEvisaDashboard
