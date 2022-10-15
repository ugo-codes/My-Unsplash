module.exports = class Authenticate {
  constructor(key) {
    this.key = key;
  }

  authenticateApp(req, res, next) {

    if (!req.headers.api_key || req.headers.api_key !== this.key) {

      res.type('json');
      res.status(403);
      res.send({ error: true, message: 'Unauthorized' });
      return;
    }
    next();
  }
};
