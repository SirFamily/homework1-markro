require('dotenv').config()
const express = require("express")
const cors = require("cors");
const errorHanlder = require('./middlewares/error');
const notFoundHanlder = require("./middlewares/notFound")
const authRoute = require("./routes/auth-route")
const productRoute =require("./routes/product-poute")
const app = express();

app.use(cors())
app.use(express.json())


app.use("/auth", authRoute)
app.use("/product",productRoute)

app.use(errorHanlder)
app.use("*", notFoundHanlder)

const port = process.env.PORT
app.listen(port, () => {
    console.log("server run on" + " " + port)
})
