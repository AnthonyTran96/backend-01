const express = require('express');
const fileUpload = require('express-fileupload');
const templateEngineConfig = require('./configs/templateEngineConfig');
const connection = require('./configs/databaseConfig');
const webRouter = require('./routes/web');
const apiRouter = require('./routes/api');
require('dotenv').config();

const app = express();

//config host
const port = process.env.HOST_PORT;

const host=process.env.HOST_NAME;

//use fileupload
app.use(fileUpload());

//pass data from Form 
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

//config template engine 
templateEngineConfig(app);

//router
app.use('/', webRouter);

//use API
app.use('/api.v1', apiRouter);

(async ()=>{
    try {
      await connection();
      app.listen(port,host, () => {
        console.log(`Backend 0 app listening on port ${port}`)
      });
    } catch (error) {
      console.log('>>>Error:', error);
    }
  
  })();