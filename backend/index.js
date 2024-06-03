const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
// const bodyParser = require("body-parser")
const app = express()
const Routes = require("./routes/route.js")

const PORT = 'mongodb+srv://shrutikambhilawade:Shrutika@123@cluster0.gowlorr.mongodb.net/?retryWrites=true&w=majority'

dotenv.config();
app.use(express.json({ limit: '10mb' }))
app.use(cors(
    {
        origin: ["https://school-cool-management-firw.vercel.app/"],
        methods: ["POST","GET"],
        credentials:true
    }
))

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})
