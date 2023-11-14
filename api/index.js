const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/User')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const cors = require('cors')



dotenv.config()


mongoose.connect(process.env.MONGO_URL);



const app = express()
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/register', async (req, res) => {

    const { username, password } = req.body;

    const UserData = await User.create(req.body);

    jwt.sign({UserId: UserData._id}, process.env.JWT_SECRET, {}, (err, token) => {
        if (err) throw err;
        res.cookie('token', token).status(200).json({id: UserData._id});
    })

})


app.listen(4000, () => {
    console.log('Server running on port 4000...')
})


// z7RfgGfQPRoiYPhc

// mongodb+srv://aasin1202:<password>@cluster0.sguzqiz.mongodb.net/?retryWrites=true&w=majority