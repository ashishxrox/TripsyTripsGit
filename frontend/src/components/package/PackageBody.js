import React, { useContext } from 'react';
import PackageContext from '../../context/Package/PackageContext';
import TourBox from './TourBox';
import '../../static/package.css'

const VisaBody = () => {
  const context = useContext(PackageContext);

  const { tours } = context;

  return (
    <>
      <div className='row pkg-body-main' style={{ backgroundColor: "white" }}>
        {tours.map((tour, index) => {
          return <TourBox key={index} tour={tour} />;
        })}
      </div>
    </>
  );
}


export default VisaBody;
