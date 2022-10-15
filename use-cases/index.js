const { photodb } = require('../db');

const Photo = require('./PhotoUseCases/Photo.js');

exports.photo = new Photo(photodb);
