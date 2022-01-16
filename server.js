const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")

const User = require("./model/user")

mongoose
    .connect("mongodb://localhost:27017/housing_app")
    .then(() => {
        const app = express()

        app.get("/", (req, res) => {
            res.sendStatus(200)
        })

        app.get("/test", async (req, res) => {
            const user = await User.find()
            res.send({ data: user })
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
            // res.status(200).json({
            //     success: true,
            //     data: "Register user",
            // })
        })

        app.post("/register")

        const PORT = 5000

        app.listen(PORT, () => console.log(`SERVER IS RUNNING IN ${process.env.NODE_ENV} mode on port ${PORT}`))
    })
    .catch(() => {
        console.log("database connection failed")
    })
