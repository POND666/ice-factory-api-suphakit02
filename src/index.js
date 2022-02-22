require('dotenv').config({path:'./config.env'});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 4001;

const cameraRoute = require("./routes/cameraRoute");


const app = express();
app.use(cors());
app.use(bodyParser.json());

require("./db")(app);

app.use("/camera",cameraRoute);


app.get("/",(req,res)=>{
    res.send("Hello Index");
});

app.listen(port,()=>{
    console.log("App is running on port " + port);
});