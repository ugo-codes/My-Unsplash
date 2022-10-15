module.exports = class Photo {
  constructor(photodb) {
    this._photodb = photodb;
  }

  async getAllPhotos() {
    try {
      const results = await this._photodb.getAllPhotos();
      return Promise.resolve(results);
    } catch (error) {
      throw error;
    }
  }

  async addPhoto(data) {
    try {
      const results = await this._photodb.addPhoto(data);
      return Promise.resolve(results);
    } catch (error) {
      throw error;
    }
  }

  async deletePhoto(data) {
    try {
      const response = this._photodb.deletePhoto(data);
      return Promise.resolve(response);
    } catch (error) {
      throw error;
    }
  }
};
