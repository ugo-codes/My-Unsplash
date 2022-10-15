const { photodb } = require('../db');

const Photo = require('./PhotoUseCases/Photo');

exports.photo = new Photo(photodb);
