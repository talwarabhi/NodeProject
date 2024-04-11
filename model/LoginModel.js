const mongoose = require("mongoose");
const [Login, User] = require("../config/collections");
const LoginSchema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
required:true,
type:String,
unique:true
},
password:{
    required:true,
    type:String
},
},
{
    timestamps: true
}
)

const LoginModel = mongoose.model(Login, LoginSchema)

module.exports = LoginModel;