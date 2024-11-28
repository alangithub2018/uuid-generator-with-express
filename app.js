const express = require("express");
const http = require("http");
const helmet = require("helmet");
const compression = require("compression");
require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const fs = require("fs");
const https = require("https");

const httpsServerOptions = {
  key: fs.readFileSync(process.env.KEY_PATH),
  cert: fs.readFileSync(process.env.CERT_PATH),
};

const app = express();
app.use(helmet({ contentSecurityPolicy: false }));
app.use(compression());

// make sure to specify which domain can access the API adding options to the cors function
app.use(cors());

const serverHttp = http.createServer(app);
serverHttp.listen(process.env.HTTP_PORT, process.env.IP);
console.log(process.env.HTTP_PORT);

const serverHttps = https.createServer(httpsServerOptions, app);
serverHttps.listen(process.env.HTTPS_PORT, process.env.IP);

// redirect all http requests to https
app.use((req, res, next) => {
  if (req.protocol === "http") {
    res.redirect(301, `https://${req.headers.host}${req.url}`);
  } else {
    next();
  }
});

app.use(express.static("public"));

app.get("/api/get-uuid", (req, res) => {
  res.send(uuidv4());
});

app.get("*", (req, res) => {
  res.status(404).send("404 Resource Not Found");
});
