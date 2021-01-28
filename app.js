const express  = require('express');

const app = express();

//Routes to enable the application to run 

app.use('/', require('./routes/index') );


//the port where the application can be viewed 
const PORT = process.env.PORT  || 5000;


app.listen(PORT, console.log(`Server Started on  port ${PORT}`));

