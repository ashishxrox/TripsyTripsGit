import React from 'react'
import { Link } from 'react-router-dom';
import '../../static/faq.css'

const Faq = ({ content }) => {
  return (
    <div className='d-flex faq-cont-outer' style={{ width: "100%", position: "relative", zIndex: "999", }}>
      <div className='faq-cont-main d-flex justify-content-center ' style={{ width: "100%", backgroundColor: "rgba(243, 236, 230, 1)" }}>
        <div className="faq-cont d-flex justify-content-center align-items-center flex-column" style={{ height: "80%", width: "90%" }}>
          <div className="fc-top my-1 d-flex align-items-center" style={{ flexBasis: "90%", height: "100%", width: "100%" }}>
            <div className="fct-left d-flex justify-content-around align-items-start flex-column" style={{ height: "100%", width: "100%" }}>
              <div className='faq-title'>
                <h3 style={{ fontSize: "46px", fontFamily: "Clash Display", fontWeight: "500" }}>FAQs</h3>
              </div>
              <div className='faq-intro' style={{ fontSize: "20px", fontWeight: "500" }}>
                <p>Have some questions ? <br /> Hope these answer them.</p>
              </div>
              <div className='faq-btn d-flex justify-content-center align-items-center' style={{ height: "65px", width: "210px", border: "1px solid rgba(2, 71, 134, 1)", borderRadius: "30px", color: "rgba(2, 71, 134, 1)", fontSize: "16px" }}>
                <Link to='/faq' style={{ textDecoration: "none", color: "rgba(2, 71, 134, 1)" }}>See all FAQs</Link>
              </div>
              <div className='faq-intro2-desk'>
                <h5 style={{ fontSize: "20px", letterSpacing: "0.5px", fontWeight: "500" }}>If not, feel free to reach out</h5>
              </div>
              <div className='faq-contact-top justify-content-between align-items-start flex-column'>
                <div className="fc-mail d-flex justify-content-between align-items-center flex-row">
                  <div className="fcm-ico">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="40" rx="20" fill="#242A3A" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.25 26V13.25C10.25 12.8358 10.5858 12.5 11 12.5H29C29.4142 12.5 29.75 12.8358 29.75 13.25V26C29.75 26 29.75 26.6213 29.3107 27.0607C29.3107 27.0607 28.8713 27.5 28.25 27.5H11.75C11.75 27.5 11.1287 27.5 10.6893 27.0607C10.6893 27.0607 10.25 26.6213 10.25 26ZM11.75 26H28.25V14H11.75V26Z" fill="white" />
                      <path d="M11.5068 12.6971C11.3685 12.5703 11.1876 12.5 11 12.5C10.9891 12.5 10.9783 12.5002 10.9674 12.5007C10.7687 12.5093 10.5815 12.5966 10.4471 12.7432C10.3203 12.8815 10.25 13.0624 10.25 13.25C10.25 13.2609 10.2502 13.2717 10.2507 13.2826C10.2593 13.4813 10.3466 13.6685 10.4932 13.8029L19.4932 22.0529C19.7799 22.3157 20.2201 22.3157 20.5068 22.0529L29.5063 13.8033C29.6613 13.6613 29.75 13.4602 29.75 13.25L29.75 13.2438C29.7484 13.0583 29.6782 12.8799 29.5529 12.7432C29.4185 12.5966 29.2313 12.5093 29.0326 12.5007C29.0217 12.5002 29.0109 12.5 29 12.5L28.9965 12.5C28.8101 12.5009 28.6306 12.5711 28.4932 12.6971L20 20.4826L11.5068 12.6971Z" fill="white" />
                    </svg>
                  </div>
                  <div className="fcm-cont mx-5">
                    <a href="mailto:info@tripsytrips.com" style={{ color: '#000', textDecoration: 'none' }}>info@tripsytrips.com</a>
                  </div>
                </div>
                <div className="fc-call d-flex justify-content-between align-items-center flex-row">
                  <div className="fcm-ico">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="40" rx="20" fill="#242A3A" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9111 16.9995L17.3484 19.3762C17.3484 19.3762 18.4263 21.5996 20.6491 22.669L20.6521 22.6669L22.9915 21.1042C22.9915 21.1042 23.3092 20.8888 23.6915 20.8535C23.6915 20.8535 24.0738 20.8183 24.421 20.9702L28.8007 22.8513C28.8007 22.8513 29.266 23.0449 29.5183 23.4812C29.5183 23.4812 29.7706 23.9175 29.7064 24.4171C29.7064 24.4171 29.4547 26.3819 27.9678 27.6907C27.9678 27.6907 26.481 28.9995 24.5 28.9999C24.5 28.9999 21.8147 28.9999 19.3338 27.9723C19.3338 27.9723 16.8529 26.9447 14.9541 25.0459C14.9541 25.0459 13.0553 23.1471 12.0276 20.6662C12.0276 20.6662 11 18.1853 11 15.4998C11 15.4998 11.0004 13.519 12.3092 12.0321C12.3092 12.0321 13.618 10.5453 15.5826 10.2936C15.5826 10.2936 16.0824 10.2293 16.5187 10.4817C16.5187 10.4817 16.955 10.734 17.1456 11.192L19.0285 15.5855C19.0285 15.5855 19.1778 15.9292 19.1479 16.3027C19.1479 16.3027 19.1181 16.6762 18.9111 16.9995ZM15.9954 20.0237L15.9942 20.0212C15.9942 20.0212 15.8265 19.6694 15.8515 19.2802C15.8515 19.2802 15.8765 18.8897 16.0891 18.5612L17.6527 16.183L15.7669 11.7829C15.7669 11.7829 14.3677 11.9638 13.4352 13.0232C13.4352 13.0232 12.5003 14.0852 12.5 15.5001C12.5 15.5001 12.5 17.8869 13.4134 20.0921C13.4134 20.0921 14.3269 22.2974 16.0147 23.9852C16.0147 23.9852 17.7025 25.6731 19.9078 26.5865C19.9078 26.5865 22.1131 27.4999 24.5 27.4999C24.5 27.4999 25.9147 27.4996 26.9767 26.5648C26.9767 26.5648 28.0362 25.6322 28.2177 24.2333L23.8292 22.3485L21.4853 23.9142C21.4853 23.9142 21.159 24.1346 20.7627 24.1647C20.7627 24.1647 20.3664 24.1948 20.0072 24.0247C20.0072 24.0247 17.3028 22.7237 15.9969 20.0268L15.9963 20.0257L15.996 20.025L15.9954 20.0237Z" fill="white" />
                    </svg>

                  </div>
                  <div className="fcm-cont mx-3" >
                    <ul style={{ listStyleType: "none", paddingLeft: "none" }}>
                      <li className='my-3' style={{ fontWeight: "500", fontSize: "16px" }}>
                        <a href="tel:+918888877729" style={{ color: '#000', textDecoration: 'none' }}>+91 8888877729</a>
                      </li>
                      <li className='my-3' style={{ fontWeight: "500", fontSize: "16px" }}>
                        <a href="tel:+918181816662" style={{ color: '#000', textDecoration: 'none' }}>+91 8181816662</a>
                      </li>
                      <li className='my-3' style={{ fontWeight: "500", fontSize: "16px" }}>
                        <a href="tel:+918828066947" style={{ color: '#000', textDecoration: 'none' }}>+91 8828066947</a>
                      </li>

                    </ul>
                  </div>
                </div>
                <div className="fc-wapp d-flex justify-content-between align-items-center flex-row">
                  <div className="fcm-ico">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="40" rx="20" fill="#242A3A" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0419 29.8281H20.0378C18.3711 29.8276 16.7335 29.4114 15.279 28.6218L10 30L11.4127 24.8645C10.5413 23.3615 10.0827 21.6566 10.0835 19.9099C10.0857 14.4456 14.5529 10 20.0418 10C22.7057 10.0011 25.206 11.0332 27.0861 12.9065C28.9662 14.7797 30.0011 17.2697 30 19.9177C29.9978 25.3807 25.5323 29.8259 20.0419 29.8281ZM15.5224 26.8296L15.8247 27.0081C17.0954 27.7586 18.5521 28.1557 20.0374 28.1563H20.0407C24.6027 28.1563 28.3156 24.461 28.3175 19.919C28.3183 17.718 27.4582 15.6485 25.8955 14.0914C24.3329 12.5344 22.2547 11.6765 20.044 11.6758C15.4785 11.6758 11.7655 15.3707 11.7637 19.9123C11.763 21.4688 12.2006 22.9846 13.0291 24.2961L13.2259 24.6077L12.3898 27.6474L15.5224 26.8296ZM24.7166 22.0571C24.8901 22.1406 25.0073 22.197 25.0574 22.2801C25.1195 22.3833 25.1195 22.8792 24.9123 23.4577C24.7049 24.0361 23.7108 24.564 23.2327 24.6351C22.8041 24.6989 22.2616 24.7255 21.6655 24.537C21.3041 24.4229 20.8407 24.2705 20.2471 24.0153C17.9144 23.0129 16.338 20.7629 16.0401 20.3377C16.0192 20.3079 16.0046 20.287 15.9965 20.2762L15.9945 20.2736C15.8628 20.0987 14.9805 18.9271 14.9805 17.7146C14.9805 16.5739 15.5435 15.9761 15.8026 15.7009C15.8204 15.682 15.8367 15.6647 15.8513 15.6488C16.0794 15.4008 16.349 15.3389 16.5148 15.3389C16.6807 15.3389 16.8468 15.3404 16.9917 15.3476C17.0096 15.3485 17.0282 15.3484 17.0475 15.3483C17.1925 15.3475 17.3732 15.3464 17.5516 15.7727C17.6202 15.9368 17.7206 16.18 17.8264 16.4365C18.0405 16.9553 18.2771 17.5285 18.3187 17.6114C18.3809 17.7354 18.4224 17.8799 18.3395 18.0453C18.327 18.07 18.3155 18.0934 18.3045 18.1158C18.2422 18.2424 18.1964 18.3355 18.0907 18.4583C18.0491 18.5066 18.0061 18.5587 17.9631 18.6108C17.8775 18.7145 17.792 18.8183 17.7174 18.8922C17.5929 19.0157 17.4632 19.1496 17.6083 19.3975C17.7535 19.6455 18.2528 20.4563 18.9925 21.113C19.7877 21.8188 20.4788 22.1172 20.8291 22.2684C20.8975 22.2979 20.9529 22.3218 20.9935 22.3421C21.2423 22.4661 21.3874 22.4453 21.5326 22.2801C21.6777 22.1148 22.1546 21.557 22.3204 21.3091C22.4863 21.0613 22.6522 21.1026 22.8802 21.1852C23.1084 21.2679 24.3317 21.8669 24.5805 21.9908C24.6291 22.015 24.6745 22.0369 24.7166 22.0571Z" fill="white" />
                    </svg>

                  </div>
                  <div className="fcm-cont mx-5">
                    <a href="https://wa.me/918805960110" style={{ color: '#000', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">+91 8805960110</a>
                  </div>

                </div>

              </div>
            </div>
            <div className="fct-right" style={{ flexBasis: "64.5%", height: "100%", width: "100%", overflowY: "auto" }}>
              <div className="accordion" id="accordionExample" style={{ height: "85%", width: "100%" }}>
                {content.map((item, index) => (
                  <div key={index} className="accordion-item py-3" style={{ border: "none", borderTop: index === 0 ? "1px solid #000" : "none", borderBottom: "1px solid #000", borderRadius: "0", backgroundColor: "rgba(243, 236, 230, 1)" }}>
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        style={{ backgroundColor: "rgba(243, 236, 230, 1)" }}
                        className={`accordion-button ${index === 0 ? '' : 'collapsed'}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded={index === 0 ? 'true' : 'false'}
                        aria-controls={`collapse${index}`}>
                        {index + 1}. {item.ques}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>{item.ans}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>



          </div>
        </div>
      </div>

    </div>
  )
}

export default Faq
