// import mongoose and dotenv packageq
import mongoose,{ConnectOptions}  from "mongoose";
import dotenv from 'dotenv'

// import the environment variables
dotenv.config();
// get the database url from the environment variables
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error('DATABASE_URL is not defined in the environment variables.');
}
// connect to the database
mongoose.connect(databaseUrl, {})

const db = mongoose.connection
// log a message when the connection is open
db.on('connected', function(){
    console.log(`Connected to ${db.name} at ${db.host}:${db.port}`)
})