import React, { useContext } from 'react'
import VisaContext from '../../context/Visa/VisaContext';
import RegVisaBox from './RegVisaBox';

const RegVisaBody = () => {
    const context = useContext(VisaContext);

    const { regVisaCountries } = context;
    return (
        <div className='row' style={{width:"100%" }}>
            {regVisaCountries.map((country, index) => {
                // Assuming both countries and images have the same length and corresponding data
                return  <RegVisaBox index={index} country={country} /> 
            })}
        </div>
    )
}

export default RegVisaBody
