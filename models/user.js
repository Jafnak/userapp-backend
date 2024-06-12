const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name":{type:String,required:true},
        "dob":{type:String,required:true},
        "mobile":{type:String,required:true},
        "address":{type:String,required:true},
        "bggroup":{type:String,required:true},
        "pin":{type:String,required:true},
        "district":{type:String,required:true},
        "place":{type:String,required:true},
        "email":{type:String,required:true},
        "uname":{type:String,required:true},
        "pwd":{type:String,required:true},
        "cpwd":{type:String,required:true}
    
    }
)
let usermodel = mongoose.model("users",schema)
module.exports = {usermodel}