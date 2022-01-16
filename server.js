const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

const User = require("./model/user")

const listings = require("./routes/listings")

dotenv.config()

mongoose
    .connect("mongodb://localhost:27017/test")
    .then(() => {
        const app = express()

        app.use("/listings", listings)

        app.get("/", (req, res) => {
            res.sendStatus(200)
        })

        app.get("/test", async (req, res) => {
            const user = await User.find()
            res.send({ data: user })
        })

        app.post("/login", (req, res) => {
            console.log(req.body)
            res.status(200).json({
                success: true,
                data: "Login user",
            })
        })
        app.post("/register", (req, res) => {
            const fname = req.body.fname
            const lname = req.body.lname
            const email = req.body.email
            const password = req.body.password

            let registerUser = new User({
                fname,
                lname,
                email,
                password,
            })
            registerUser.save().then((data) => {
                res.send(data).catch((err) => {
                    console.log(err)
                })
            })
        })

        app.post("/register")

        const PORT = 5000

        app.listen(PORT, () => console.log(`SERVER IS RUNNING IN ${process.env.NODE_ENV} mode on port ${PORT}`))
    })
    .catch(() => {
        console.log("database connection failed")
    })
