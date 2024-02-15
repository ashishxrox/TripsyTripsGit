import React, { useContext } from 'react';
import PackageContext from '../../context/Package/PackageContext';
import TourBox from './TourBox';

const VisaBody = () => {
  const context = useContext(PackageContext);
  
  const { tours} = context;

  return (
    <>
    <div className='row py-5' style={{ backgroundColor: "white", paddingLeft: "40px", zIndex:"-99999999"}}>
      {tours.map((tour, index) => {
        return <TourBox key={index} tour={tour}/>;
      })}
    </div>
    </>
  );
}

export default VisaBody;
