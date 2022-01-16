const express = require("express")
const dotenv = require("dotenv")

dotenv.config()

console.log(process.env.NODE_ENV)

const app = express()

app.get("/", (req, res) => {
    res.sendStatus(200)
})

app.get("/listings", (req, res) => {
    res.status(200).json({
        success: true,
        data: "Receive array of all apartment",
    })
})

app.get("/listings", (req, res) => {
    res.status(200).json({
        success: true,
        data: "Receive array of all apartment",
    })
})
app.get("/listings/:id", (req, res) => {
    res.status(200).json({
        success: true,
        data: "Receive this apartment",
    })
})

app.post("/listings", (req, res) => {
    res.status(200).json({
        success: true,
        data: "Create new apartment",
    })
})

app.put("/listings/:id", (req, res) => {
    res.status(200).json({
        success: true,
        number: req.params.id,
        data: "Update apartment",
    })
})

app.delete("/listings/:id", (req, res) => {
    res.status(200).json({
        success: true,
        number: req.params.id,
        data: "Delete this apartment",
    })
})

app.post("/login", (req, res) => {
    res.status(200).json({
        success: true,
        data: "Login user",
    })
})
app.post("/register", (req, res) => {
    res.status(200).json({
        success: true,
        data: "Register user",
    })
})

app.post("/register")

const PORT = 5000

app.listen(PORT, () => console.log(`SERVER IS RUNNING IN ${process.env.NODE_ENV} mode on port ${PORT}`))
