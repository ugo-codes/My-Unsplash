const { photo } = require('../../use-cases');
const errors = require('../../errors/errors.js');

module.exports = class PhotoController {
  async getAllPhotos(_, res, next) {
    try {
      const results = await photo.getAllPhotos();
      res.type('json');
      res.status(200).send(results);
      return;
    } catch (error) {
      next({
        code: errors[error.message]?.code,
        message: errors[error.message]?.message,
      });
    }
  }

  async postPhoto(req, res, next) {
    try {
      const data = req.body;

      if (!data.img || !data.title || !data.password) {
        throw new Error('bodyNotComplete');
      }
      const result = await photo.addPhoto(data);

      res.type('json');
      res.status(200).send(result);
    } catch (error) {
      next({
        code: errors[error.message]?.code,
        message: errors[error.message]?.message,
      });
    }
  }

  async deletePhoto(req, res, next) {
    try {
      const data = req.body;
      if (!data.img || !data.title || !data.password) {
        throw new Error('bodyNotComplete');
      }

      const response = await photo.deletePhoto(data);

      res.type('json');
      res.status(200).send(response);
    } catch (error) {
      next({
        code: errors[error.message]?.code,
        message: errors[error.message]?.message,
      });
    }
  }
};
