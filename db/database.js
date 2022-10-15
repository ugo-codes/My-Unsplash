module.exports = class Database {
  constructor(mongoose , DatabaseURL) {
    this._mongoose = mongoose;
    this._DatabaseURL = DatabaseURL

    this.connectToDatabse();
  }

  async connectToDatabse() {
    try{
    await this._mongoose.connect(this._DatabaseURL);
    }catch(error){}
  }

  disconnectFromDatabase() {
    this._mongoose.connection.close();
  }
};
