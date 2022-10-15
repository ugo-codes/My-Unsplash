require('dotenv').config();

const Authenticate = require("./authenticate")

exports.authenticate = new Authenticate(process.env.KEY)