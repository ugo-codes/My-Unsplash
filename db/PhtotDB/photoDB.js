module.exports = class PhotoDB {
  constructor(photoModel) {
    this._model = photoModel;
  }

  async _getAllPhotos() {
    // connects to the database
    try {
      const results = await this._model.find().lean();

      if (results.length == 0)
        return Promise.reject({ message: 'noPhotosYet' });

      // returns the required value
      return Promise.resolve(
        results.map(value => ({
          img: value.img,
          title: value.title,
          password: value.password,
        }))
      );
    } catch (error) {
      throw error;
    }
  }

  async _addPhoto(data) {
    try {
      const results = await this._model.create(data);

      return Promise.resolve({
        img: results.img,
        title: results.title,
        password: results.password,
      });
    } catch (error) {
      throw error;
    }
  }

  async _deletePhoto(data) {
    try {
      // delete the data from the database using the model
      const response = await this._model.deleteOne(data);
      // get a parameter from the response gotten
      const { acknowledged } = response;
      // return the true if an entry was deleted else false
      return Promise.resolve({ acknowledged });
    } catch (error) {
      throw error;
    }
  }
};
