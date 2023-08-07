const mongoose = require('mongoose');

const URI = "mongodb+srv://sarvesh:tC6COLSNujuBDBzI@cluster0.8clonjl.mongodb.net/";
// const URI = "mongodb+srv://capitallatera:kKxC5fDqpobUX1f8@cluster0.lqxm8ow.mongodb.net/"
const connectDB = async () => {
    try
    {
        await mongoose.connect(URI, { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } catch (err)
    {
        console.error(err);
    }
};

module.exports = connectDB;