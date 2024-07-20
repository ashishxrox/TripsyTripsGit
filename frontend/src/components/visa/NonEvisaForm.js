import React, { useState, useContext, useEffect } from 'react';
import FormDataContext from '../../context/FormData/FormDataContext';
import '../../static/userForm.css';

const NonEvisaForm = ({ type }) => {
  const { nonEvisa, setNonEvisa, handleNonEvisaSubmit } = useContext(FormDataContext);
  const [isFormComplete, setIsFormComplete] = useState(false);

  const vName = type[0].name;
  console.log(vName);

  const [data, setData] = useState({
    name: '',
    email: '',
    contact: '',
    departDates: '',
    returnDates: '',
    visaName: vName,
  });

  useEffect(() => {
    if (nonEvisa.name) {
      handleNonEvisaSubmit();
    }
  }, [nonEvisa.name, handleNonEvisaSubmit]);

  useEffect(() => {
    const checkFormComplete = () => {
      const { name, email, contact, departDates, returnDates } = data;
      return (
        name.trim() !== '' &&
        email.trim() !== '' &&
        contact.trim() !== '' &&
        departDates.trim() !== '' &&
        returnDates.trim() !== ''
      );
    };
    setIsFormComplete(checkFormComplete());
  }, [data]);

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (isFormComplete) {
      setNonEvisa(data);
    }
  };

  return (
    <div className='d-flex align-items-center justify-content-center' style={{ width: '100%', height: '100%', border: '1px solid #000', borderRadius: '5px' }}>
      <div className='d-flex align-items-center justify-content-center' style={{ width: '100%', height: '100%' }}>
        <div className='d-flex align-items-center justify-content-center p-5' style={{ width: '100%', height: '100%' }}>
          <div className='d-flex align-items-start justify-content-start flex-column' style={{ width: '100%', height: '100%' }}>
            <div className=''>
              <h1 className='my-4' style={{ fontFamily: 'Clash Display', fontSize: '24px', fontWeight: '500' }}>
                Application Form for {vName}
              </h1>
              <h4 className='my-4' style={{ fontSize: '20px', fontWeight: '500' }}>
                Traveller Details
              </h4>
            </div>
            <form style={{ width: '100%' }} onSubmit={onSubmit}>
              <div className='d-flex justify-content-center align-items-center flex-column' style={{ width: '100%' }}>
                <div className='d-flex justify-content-between align-items-center ' style={{ width: '100%' }}>
                  <div className='mb-3' style={{ flexBasis: '48%', width: '100%' }}>
                    <label htmlFor='name' className='form-label' style={{ fontSize: '16px', fontWeight: '500' }}>
                      Full Name*
                    </label>
                    <input type='text' className='form-control px-4 py-3' id='name' name='name' placeholder='Full Name' onChange={onChange} required />
                  </div>
                  <div className='mb-3' style={{ flexBasis: '48%', width: '100%' }}>
                    <label htmlFor='email' className='form-label' style={{ fontSize: '16px', fontWeight: '500' }}>
                      Email id:
                    </label>
                    <input type='email' className='form-control px-4 py-3' id='email' name='email' aria-describedby='emailHelp' placeholder='Enter email' onChange={onChange} required />
                  </div>
                </div>
                <div className='d-flex justify-content-between align-items-center ' style={{ width: '100%' }}>
                  <div className='mb-3' style={{ flexBasis: '48%', width: '100%' }}>
                    <label htmlFor='contact' className='form-label' style={{ fontSize: '16px', fontWeight: '500' }}>
                      Contact Number:
                    </label>
                    <input type='text' className='form-control px-4 py-3' id='text' name='contact' placeholder='Contact Number' onChange={onChange} required />
                  </div>
                  <div className='mb-3' style={{ flexBasis: '48%', width: '100%' }}>
                    <label htmlFor='departDate' className='form-label'>
                      Departure Date
                    </label>
                    <input type='date' className='form-control px-4 py-3' name='departDates' id='departDate' placeholder='' onChange={onChange} required />
                  </div>
                </div>
                <div className='d-flex justify-content-between align-items-center ' style={{ width: '100%' }}>
                  <div className='mb-3' style={{ flexBasis: '48%', width: '100%' }}>
                    <label htmlFor='returnDates' className='form-label' style={{ fontSize: '16px', fontWeight: '500' }}>
                      Return Date:
                    </label>
                    <input type='date' className='form-control px-4 py-3' id='returnDate' name='returnDates' placeholder='' onChange={onChange} required />
                  </div>
                </div>
              </div>
              <div className=''>
                <button
                  type='submit'
                  className={`${!isFormComplete ? 'btn-disabled' : 'final-btn'}`}
                  style={{ color: '#fff', height: '65px', width: '180px', borderRadius: '30px' }}
                  disabled={!isFormComplete}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonEvisaForm;
