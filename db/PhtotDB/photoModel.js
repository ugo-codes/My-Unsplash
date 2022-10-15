const mongoose = require("mongoose")
const photoScheme = require("./photoSchema")

const photoModel = mongoose.model("Photo", photoScheme)

module.exports = photoModel