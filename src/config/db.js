
const mongoose = require("mongoose")

const mongodbUrl="mongodb+srv://amaldevhari265:BohY2d4zrCnGXqRL@cluster0.szdvd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function connectDB() {
   return mongoose.connect(mongodbUrl)    
}

module.exports = connectDB