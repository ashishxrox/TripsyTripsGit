require('dotenv').config();

const connectToMongo = require('./db')
const express = require('express')
const cors = require('cors')
const app = express()


// const port = 4321
const port = process.env.PORT || 4321;

app.use(express.json())
app.use(cors());



app.get('/', (req,res)=>{
    res.send("hello world")
})

app.use('/api/addVisaData', require('./routes/addVisaData.js'))
app.use('/api/getVisaData', require('./routes/getVisaData.js'))
app.use('/api/submit-form', require('./routes/getFormData.js'))
app.use('/api/fetchFormData', require('./routes/fetchFormData.js'))
app.use('/api/update', require('./routes/updateData.js'))
app.use('/api/delete', require('./routes/deleteQueries.js'))



app.use('/api/phonepe',require('./routes/paymentEndpoint.js'))
app.use('/api/getNotify',require('./routes/getNotify.js'))

// Create Payment Route
// app.post('/api/payment', createPayment);

// Payment Response Route
// app.post('/api/payment/response', handleResponse);



app.listen(port, ()=>{
    console.log(`Running on http://localhost:${port}`)
})

connectToMongo()