const mongoose = require("mongoose");

const URLschema = new mongoose.Schema({
    ShortID :{
        type :String ,
        required : true,
        unique :true,
    },
    redirectURL: {
        type:String,
        required:true,
    },
    VisitHistory : [{timestamp :{type :Number}}] ,
} , {timestamps :true});


const URL = mongoose.model("url" , URLschema);

module.exports = URL;