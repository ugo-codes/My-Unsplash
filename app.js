const express = require('express');
const bodyParser = require('body-parser');
const photoRoutes = require('./routes/photoRoutes.js');
const errorHandler = require('./errorHandlers/errorHandler');
const path = require('path');
const cors = require('./cors');

const app = express();

app.use(cors);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use(photoRoutes);
app.use(errorHandler);

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
