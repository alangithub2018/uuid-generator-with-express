const express = require("express");
const http = require("http");
const helmet = require("helmet");
const compression = require("compression");
require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");

const app = express();
app.use(helmet({ contentSecurityPolicy: false }));
app.use(compression());

// make sure to specify which domain can access the API adding options to the cors function
app.use(cors());

const serverHttp = http.createServer(app);
serverHttp.listen(process.env.HTTP_PORT, process.env.IP);
console.log(process.env.HTTP_PORT);

app.use(express.static("public"));

app.get("/api/get-uuid", (req, res) => {
  res.send(uuidv4());
});

app.get("*", (req, res) => {
  res.status(404).send("404 Resource Not Found");
});
