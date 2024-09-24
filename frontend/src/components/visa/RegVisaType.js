import React, { useContext } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import RegVisaBanner from './RegVisaBanner'

import '../../static/regVisa.css'

import Australia from '../../static/assets/country/australia.png'
import Canada from '../../static/assets/country/canada.png'
import UK from '../../static/assets/country/uk.png'
import Schengen from '../../static/assets/country/schengen.png'
import America from '../../static/assets/country/america.png'
import Taiwan from '../../static/assets/country/taiwan.png'
import Turkey from '../../static/assets/country/turkey.png'
import NewZealand from '../../static/assets/country/newZealand.png'
import Faq from '../Faq/Faq';
// import NonEvisaForm from './NonEvisaForm';

import VisaContext from '../../context/Visa/VisaContext';

import FaqContext from '../../context/FaqCont/FaqContext'
import RegVisaModal from './RegVisaModal';

const RegVisaType = () => {
  const {countryName} = useParams()
  const Visacontext = useContext(VisaContext);
  const { regVisaCountries } = Visacontext;

  const context = useContext(FaqContext)
  const { genFaq, ausFaq, ukFaq, usaFaq, canFaq, schenFaq, nzFaq, turFaq, taiFaq } = context

  const location = useLocation();
  const country = regVisaCountries.find(c => c.country.toLowerCase() === countryName.toLowerCase());
  

  const renderDocumentList = () => {
    // Check if docs is not null or undefined
    if (country.visaType[0].docsReq && Object.keys(country.visaType[0].docsReq).length > 0) {
      // Iterate over the keys of the docs object and render each document
      return (
        <ol style={{ fontSize: "18px", fontWeight: "500" }}>
          {Object.keys(country.visaType[0].docsReq).map((key, index) => (
            <li key={index}>{country.visaType[0].docsReq[key]}</li>
          ))}
        </ol>
      );
    } else {
      return <p>No documents to Show</p>;
    }
  };
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <RegVisaBanner />

      <div className="regVisa-top d-flex justify-content-center align-items-center" style={{ width: "90%" }}>
        <div className="vft-left mx-1 d-flex justify-content-between align-items-center flex-column" style={{ flexBasis: "55%", height: "90%", width: "95%" }}>
          <div className="vftl-txt my-1 d-flex justify-content-start align-items-center" style={{ flexBasis: "25%", height: "100%", width: "100%" }}>
            <h2 style={{ fontFamily: "Clash Display", fontWeight: "500", fontSize: "46px" }}>{country.country}</h2>
          </div>
          <div className="vftl-content my-1 d-flex justify-content-start align-items-start flex-column" style={{ flexBasis: "75%", height: "100%", width: "100%" }}>
            <h4 className='my-3' style={{ fontFamily: "Clash Display", fontWeight: "500", fontSize: "24px" }}>Please keep these documents ready to apply for visa</h4>
            {renderDocumentList()}
          </div>
        </div>
        <div className="vtf-right d-flex justify-content-center align-items-center" style={{ flexBasis: "45%", height: "100%", width: "100%" }}>
          {country.country === "Canada" && <img src={Canada} alt="" style={{ height: "100%", width: "150%", aspectRatio: "1/2", filter: "drop-shadow(0 0 10px #000)" }} />}
          {country.country === "United Kingdom" && <img src={UK} alt="" style={{ height: "100%", width: "150%", aspectRatio: "1/2", filter: "drop-shadow(0 0 10px #000)" }} />}
          {country.country === "Schengen Area" && <img src={Schengen} alt="" style={{ height: "100%", width: "150%", aspectRatio: "1/2", filter: "drop-shadow(0 0 10px #000)" }} />}
          {country.country === "United States of America" && <img src={America} alt="" style={{ height: "100%", width: "150%", aspectRatio: "1/2", filter: "drop-shadow(0 0 10px #000)" }} />}
          {country.country === "Taiwan" && <img src={Taiwan} alt="" style={{ height: "100%", width: "150%", aspectRatio: "1/2", filter: "drop-shadow(0 0 10px #000)" }} />}
          {country.country === "Turkey" && <img src={Turkey} alt="" style={{ height: "100%", width: "150%", aspectRatio: "1/2", filter: "drop-shadow(0 0 10px #000)" }} />}
          {country.country === "New Zealand" && <img src={NewZealand} alt="" style={{ height: "100%", width: "150%", aspectRatio: "1/2", filter: "drop-shadow(0 0 10px #000)" }} />}
          {country.country === "Australia" && <img src={Australia} alt="" style={{ height: "100%", width: "150%", aspectRatio: "1/2", filter: "drop-shadow(0 0 10px #000)" }} />}
          {/* <div style={{height:"70%", width:"100%", backgroundImage:`url(${countryImage})`, backgroundSize:"cover"}}>
            <div style={{height:"100%", backgroundColor:"#000", position:"relative", zIndex:"-1"}}></div>
          </div> */}
        </div>
      </div>
      <div className="regVisa-form d-flex justify-content-center align-items-center" style={{ height: "55px", width: "90%" }}>
        {/* <NonEvisaForm type={country.visaType}/>  */}
        <div className=' d-flex justify-content-center align-items-center'>
          {/* <a href="">Book Appointment</a> */}
          <RegVisaModal country={country.country} />
        </div>
      </div>
      {country.country === 'Canada' && <Faq content={canFaq ? canFaq : genFaq} />}
      {country.country === 'United Kingdom' && <Faq content={ukFaq ? ukFaq : genFaq} />}
      {country.country === 'Schengen Area' && <Faq content={schenFaq ? schenFaq : genFaq} />}
      {country.country === 'United States of America' && <Faq content={usaFaq ? usaFaq : genFaq} />}
      {country.country === 'Taiwan' && <Faq content={taiFaq ? taiFaq : genFaq} />}
      {country.country === 'Turkey' && <Faq content={turFaq ? turFaq : genFaq} />}
      {country.country === 'New Zealand' && <Faq content={nzFaq ? nzFaq : genFaq} />}
      {country.country === 'Australia' && <Faq content={ausFaq ? ausFaq : genFaq} />}
    </div>
  )
}

export default RegVisaType
