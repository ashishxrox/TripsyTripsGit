import React, {useContext} from 'react'
import FaqContext from '../../context/FaqCont/FaqContext'
import Faq from '../Faq/Faq'
import RegVisaBanner from './RegVisaBanner'
import RegVisaBody from './RegVisaBody'

const RegVisa = () => {
  const context = useContext(FaqContext)

  const { genFaq } = context
  console.log(genFaq)

  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <RegVisaBanner />
      <div className="visa-title my-5 d-flex justify-content-end align-items-start flex-column" style={{ height: "15vh", width: "90%", backgroundColor: "#fff" }}>
        <div className="head-box my-1 d-flex justify-content-start align-items-center" style={{ flexBasis: "25%", height: "80%", width: "30%" }}>
          <h2 style={{ fontSize: "46px", fontWeight: "500", fontFamily: "Clash Display" }}>Visa</h2>
        </div>
      </div>

      <div className="reg-visa-content" style={{ width: "90%" }}>
        <RegVisaBody />
      </div>
      <Faq content = {genFaq} />

    </div>
  )
}

export default RegVisa