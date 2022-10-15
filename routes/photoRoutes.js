const express = require('express');
const router = express.Router();
const { photoController } = require('../controllers');
const {authenticate} = require("../authentication")

router.get('/photo/all', authenticate.authenticateApp.bind(authenticate), photoController.getAllPhotos);
router.post('/photo/add', authenticate.authenticateApp, photoController.postPhoto);
router.delete("/photo/delete", authenticate.authenticateApp, photoController.deletePhoto)

module.exports = router;
