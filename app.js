const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cookie_parser = require("cookie-parser")
const cors = require("cors")
dotenv.config()

const auth_route = require("./routes/auth")
const product_route = require("./routes/products_api")
const PORT = process.env.PORT || 3000
const connect = () => {
	mongoose
		.connect(process.env.MONGO_DB)
		.then(() => {
			console.log("successfully connected to database! 🎊 ")
		})
		.catch((err) => {
			throw new Error(err)
		})
}

const app = express()

// middlewares
app.use(cors())
app.use(cookie_parser())
app.use(express.json())

// custom middelwares
app.use("/auth", auth_route)
app.use("/products", product_route)

// error handlers
app.use((req, res) => {
	res.status(404).send({
		err: "not found!",
	})
})

app.use((error, req, res, next) => {
	status_code = error.status || 500
	message = error.message || "something went wrong!"
	res.status(status_code).send({ err: message })
})

app.listen(PORT, () => {
	connect()
	console.log("server started ! 🚀")
})
