const express = require('express');
const mongoose = require('mongoose');
const cookiePa

//create a database connection --> u can also
//create a seperate file for this and then import/ use that field
mongoose.connect('mongodb+srv://NoorAlam:Nooralam2023@cluster0.gmhw0w6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>console.log("MongoDB connected"))
.catch((error) => console.log(error));

const app = express();
const port = process.env.PORT || 5000;