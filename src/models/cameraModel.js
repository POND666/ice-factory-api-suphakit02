const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const cameraSchema = new Schema({

    cameraId:{
        type:String,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true
    },
    location:{
       type:String,
       required:true
    },

},{
    timestamps:true
});

module.exports = mongoose.model("Camera", cameraSchema);
cameraSchema.plugin(uniqueValidator, {
    message: '{PATH} Already in use'
});

