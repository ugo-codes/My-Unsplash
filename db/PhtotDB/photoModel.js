const mongoose = require("mongoose")
const photoScheme = require("./photoSchema.js")

const photoModel = mongoose.model("Photo", photoScheme)

module.exports = photoModel