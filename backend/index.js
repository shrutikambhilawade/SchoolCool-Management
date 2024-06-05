const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const app = express()
const Routes = require("./routes/route.js")

dotenv.config();

const PORT =  process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://Shrutikambhilawade:Shrutika%40123@cluster1.s2ygsih.mongodb.net/test?retryWrites=true&w=majority";
app.use(express.json({ limit: '10mb' }))
app.use(cors(
    {
        origin: ["https://school-cool-management-firw.vercel.app"],
        methods: ["POST","GET"],
        credentials:true
    }
))

mongoose
    .connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})
