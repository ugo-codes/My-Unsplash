module.exports = class PhotoDBAPI {
  constructor(photoDB) {
    this.photoDB = photoDB;
  }

  async getAllPhotos() {
    try {
      const results = await this.photoDB._getAllPhotos();
      return results;
    } catch (error) {
      throw error;
    }
  }

  async addPhoto(data) {
    try {
      const results = await this.photoDB._addPhoto(data);
      return results;
    } catch (error) {
      throw error;
    }
  }

  async deletePhoto(data) {
    try {
      const response = this.photoDB._deletePhoto(data);
      return response;
    } catch (error) {
      throw error;
    }
  }
};
