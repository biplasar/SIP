const express = require('express');
const cors = require('cors');
const app = express();
app.options('*', cors());

app.use(express.json());

const routes = require('./api_routes/routes');
routes(app);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening to port http://localhost:${port}`);
});