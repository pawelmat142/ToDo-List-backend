require('dotenv').config({path: '.env'})
const mongoose = require('mongoose')
const dbpassword = process.env.DB_PASSWORD
const dbname = process.env.DB_NAME
const dbuser = process.env.DB_USER
const dbdbdb = process.env.DBDBDB
const url = `mongodb+srv://${dbuser}:${dbpassword}@${dbname}.${dbdbdb}.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(url)