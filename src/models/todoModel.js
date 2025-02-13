const { Collection } = require("mongoose")
const mongoose = require("mongoose")
const todoSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,    //Doldurulması zorunlu
        trim : true         //Baştaki ve sondaki boşlukları siler
    },
    description : {
        type : String,
        required : true,
        trim : true         
    },
    completed : {
        type : Boolean,
        required : true,
        default : false    //Default değer      
    }

},{collection : "Todo" , timestamps : true})

const todo = mongoose.model("Todo" , todoSchema)

module.exports = todo