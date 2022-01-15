const express = require("express")
const dotenv = require("dotenv")

dotenv.config()

console.log(process.env.NODE_ENV)

const app = express()

app.get("/", (req, res) => {
    console.log(req.method)
    res.send("hi hao")
})
const PORT = 5000

app.listen(PORT, () => console.log(`SERVER IS RUNNING IN ${process.env.NODE_ENV} mode on port ${PORT}`))
