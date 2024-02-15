import React,{useContext} from 'react'
import DashboardContext from '../../context/Dashboard/DashBoardContext'
import PackageBox from './PackageBox';

const PackageDash = () => {

  const {packages }  = useContext(DashboardContext);

  const sortedPackages = [...packages].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div style={{height:"100%", overflow:"auto"}}>
        {sortedPackages.map((data) => {
          return <PackageBox data={data}/>
          
        })}
    </div>
  )
}

export default PackageDash
