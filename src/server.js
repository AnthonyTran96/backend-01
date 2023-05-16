const express = require('express');
const templateEngineConfig = require('./configs/templateEngineConfig');
const connection = require('./configs/databaseConfig');
const webRouter = require('./routes/web');
require('dotenv').config();

const app = express();

//config host
const port = process.env.HOST_PORT;

const host=process.env.HOST_NAME;

//config template engine 
templateEngineConfig(app);

//pass data from Form 
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

//router
app.use('/', webRouter);

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