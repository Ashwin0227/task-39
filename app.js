const { router }= require('./router.js');
const express = require('express'); 
const dotenv = require('dotenv');
const compress = require("compression");

dotenv.config();
const app = express(); 
app.use(express.json());
app.use(compress({ 
  level: 9
}));
app.use(router);

port = process.env.PORT || 3000
app.listen(port, function (err) {
if(err){
	console.log("Error while starting server");
  return;
}
console.log("Server has been started at "+ port);
})


