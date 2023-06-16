const mongoose = require("mongoose")
const products = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	brief: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: true,
	},
	options: {
		type: Array,
		required: true,
	},
	brand: {
		type: String,
		require: true,
	},
	image: {
		type: Array,
		require: true,
	},
	user: {
		type: Object,
		require: true,
	},
})

module.exports = mongoose.model("products", products)
