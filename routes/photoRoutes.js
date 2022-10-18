const express = require('express');
const router = express.Router();
const { photoController } = require('../controllers');
const {authenticate} = require("../authentication")

router.get('/photo/all', authenticate.authenticateApp.bind(authenticate), photoController.getAllPhotos);
router.post('/photo/add', authenticate.authenticateApp.bind(authenticate), photoController.postPhoto);
router.delete("/photo/delete", authenticate.authenticateApp.bind(authenticate), photoController.deletePhoto)

module.exports = router;
