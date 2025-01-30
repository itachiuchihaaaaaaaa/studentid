const mongoose = require("mongoose")
const studentschema=mongoose.Schema({
    studentname:String,
    studentage:Number
})

const studentModel = mongoose.model("student",studentschema)
module.exports=studentModel