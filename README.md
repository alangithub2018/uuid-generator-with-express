# Simple API using express by NodeJS

![Node.js](https://nodejs.org/static/images/logo.svg) ![Express](https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png)

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

2. Configure your environment variables as follows

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

6. SSL/TLS local certificate for development

   - Setup needed configuration to specify certificate location files

```
KEY_PATH=your_path.key
CERT_PATH=your_path.crt
```

    - Install `fs` node package to be able to read the files content

```
npm i fs
```

    - Adding dependency to your js file

```
const fs = require('fs');
```
