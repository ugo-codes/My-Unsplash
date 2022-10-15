require('dotenv').config();
const mongoose = require('mongoose');

const Database = require('./database');
const photoModel = require('./phtotDB/photoModel');
const PhotoDB = require('./PhtotDB/photoDB');
const PhotoDBAPI = require('./PhtotDB/photoDBAPI');

const database = new Database(mongoose, process.env.DatabaseURL);
const photoDB = new PhotoDB(photoModel);

exports.photodb = new PhotoDBAPI(photoDB);
