const ccav = require('./cca_nodejs_integration/ccavUtil'); // Update the path if needed
const config = require('./cca_nodejs_integration/config');

const localHost = 'http://localhost:4321'
const WEB_URL = 'www.tripsytrips.com' || 'tripsytrips.com';


const createPayment = (req, res) => {
    const { orderId, amount, currency } = req.body;
    
    // Payment Details
    const paymentData = {
      merchant_id: config.merchantId,
      order_id: orderId,
      currency,
      amount,
      redirect_url: `${localHost}/api/payment/response`, // Change to your domain
      cancel_url: `${localHost}/api/payment/response`,   // Change to your domain
      language: 'EN',
      billing_name: req.body.name,
      billing_address: req.body.address,
      billing_city: req.body.city,
      billing_state: req.body.state,
      billing_zip: req.body.zip,
      billing_country: req.body.country,
      billing_tel: req.body.phone,
      billing_email: req.body.email
    };
    const encryptedData = ccav.encrypt(JSON.stringify(paymentData), config.workingKey);
    res.json({
      encRequest: encryptedData,
      accessCode: config.accessCode
    });
  };

  const handleResponse = (req, res) => {
    const encryptedResponse = req.body.encResp;
    const decryptedResponse = ccav.decrypt(encryptedResponse, config.workingKey);
  
    // Process the response
    console.log(decryptedResponse);
    // TODO: Handle payment success or failure
  
    res.send('Payment processing complete.');
  };
  
  module.exports = { createPayment, handleResponse };