const { app } = require(".");
const connectDB = require("./config/db.js");



const port=5454


app.listen(5454,async() => {
     await connectDB
     console.log("Server is running on port", port )
})
