# Simple API using express by NodeJS

this is a very simple api using express, final purpose is to deploy it to aws

## Steps for completion

1. Install following node packages using npm

```
npm init --yes
npm i express
npm i dotenv
npm i compression
npm i helmet
npm i uuid
```

2. Configure your environment variables as follow

```
NODE_ENV=development
IP=localhost
HTTP_PORT=80
HTTPS_PORT=443
```

3. Import following packages to your express server application

```
const express = require(‘express’);
const http = require(‘http’);
const helmet = require(‘helmet’);
const compression = require(‘compression’);
require(‘dotenv’).config();
const {v4: uuidv4} = require(‘uuid’);
```

4. Make sure to set up compress to optimize data transfer between clients and server

```
app.use(compression());
```

5. Set up your static directory to be exposed

```
app.use(express.static("public"));
```
