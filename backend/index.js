require('dotenv').config();

const connectToMongo = require('./db')
const express = require('express')
const cors = require('cors')
const app = express()


// const port = 4321
const port = process.env.PORT || 4321;

app.use(express.json())

// DEPLOYEMENT
app.use(cors({
    origin: ['https://tripsytrips.com', 'https://www.tripsytrips.com', 'http://localhost:3000']
}));

// DEV
// app.use(cors())


app.get('/', (req,res)=>{
    res.send("hello world")
})

app.use('/api/addVisaData', require('./routes/addVisaData.js'))
app.use('/api/getVisaData', require('./routes/getVisaData.js'))
app.use('/api/submit-form', require('./routes/getFormData.js'))
app.use('/api/fetchFormData', require('./routes/fetchFormData.js'))
app.use('/api/update', require('./routes/updateData.js'))
app.use('/api/delete', require('./routes/deleteQueries.js'))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://tripsytrips.com');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});



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