const errorHandler = function (Error, req, res, next) {
  res.status(Error?.code || 500);
  res.type('json');
  res.send({ error: true, message: Error?.message || 'Internal Server Error' });
};

module.exports = errorHandler;
