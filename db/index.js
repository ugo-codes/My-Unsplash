require('dotenv').config();
const mongoose = require('mongoose');

const Database = require('./database.js');
const photoModel = require('./phtotDB/photoModel.js');
const PhotoDB = require('./PhtotDB/photoDB.js');
const PhotoDBAPI = require('./PhtotDB/photoDBAPI.js');

const database = new Database(mongoose, process.env.DatabaseURL);
const photoDB = new PhotoDB(photoModel);

exports.photodb = new PhotoDBAPI(photoDB);
