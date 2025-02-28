const express = require("express");
const { ServerConfig } = require("./config");
const apiRoutes = require('./routes')
const app = express();

app.use('/api', apiRoutes)

app.listen(ServerConfig.PORT, (req, res) => {
  console.log(`Server start on PORT ${ServerConfig.PORT}`);
});
