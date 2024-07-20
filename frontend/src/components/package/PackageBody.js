import React, { useContext } from 'react';
import PackageContext from '../../context/Package/PackageContext';
import TourBox from './TourBox';

const VisaBody = () => {
  const context = useContext(PackageContext);

  const { tours } = context;

  return (
    <>
      <div className='row' style={{ backgroundColor: "white", paddingLeft: "40px" }}>
        {tours.map((tour, index) => {
          return <TourBox key={index} tour={tour} />;
        })}
      </div>
    </>
  );
}


export default VisaBody;
