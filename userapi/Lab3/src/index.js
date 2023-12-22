const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Ajoutez les routes ici
const userRoute = require('./routes/user');
app.use(userRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
