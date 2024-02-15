import React, { useContext } from 'react';
import VisaContext from '../../context/Visa/VisaContext';
import CountryBox from './CountryBox';

const VisaBody = () => {
  const context = useContext(VisaContext);
  
  const { countries} = context;

  return (
    <>
    <div className='row py-5' style={{ backgroundColor: "white", paddingLeft: "40px", zIndex:"-99999999"}}>
      {countries.map((country, index) => {
        // Assuming both countries and images have the same length and corresponding data
        return <CountryBox key={index} country={country}/>;
      })}
    </div>
    </>
  );
}

export default VisaBody;
