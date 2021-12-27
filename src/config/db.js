const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

module.exports = () => {
    return mongoose.connect(`mongodb+srv://${process.env.mongodb_user}:${process.env.mongodb_pw}@cluster0.1ften.mongodb.net/WebpackandBabel_5157`)
}