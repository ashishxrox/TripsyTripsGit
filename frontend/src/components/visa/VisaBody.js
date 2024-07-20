import React, { useContext } from 'react';
import VisaContext from '../../context/Visa/VisaContext';
import CountryBox from './CountryBox';

const VisaBody = ({active}) => {
  const context = useContext(VisaContext);
  
  const { countries, asianCountries, africanCountries, europeanCountries } = context;

  

  return (
    <>
    <div className='row' style={{ backgroundColor: "white", zIndex:"-99999999"}}>
      {active=== 0 && countries.map((country, index) => {
        // Assuming both countries and images have the same length and corresponding data
        return <CountryBox key={index} country={country}/>;
      })}
      {active=== 1 && asianCountries.map((country, index) => {
        // Assuming both countries and images have the same length and corresponding data
        return <CountryBox key={index} country={country}/>;
      })}
      {active=== 2 && africanCountries.map((country, index) => {
        // Assuming both countries and images have the same length and corresponding data
        return <CountryBox key={index} country={country}/>;
      })}
      {active=== 3 && europeanCountries.map((country, index) => {
        // Assuming both countries and images have the same length and corresponding data
        return <CountryBox key={index} country={country}/>;
      })}
    </div>
    </>
  );
}

export default VisaBody;
