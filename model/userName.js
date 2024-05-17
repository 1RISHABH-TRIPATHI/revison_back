const mongoose=require('mongoose')
const addSchema= mongoose.Schema({
    village:{
        type:String,
        
    },
    district:{
        type:String,
        required:true,
        
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type: String,
        required:true
    }
});
const userNameSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        match:/^\d{10}$/
    },
    address:[addSchema],

});
const userName=mongoose.model('users',userNameSchema);
module.exports=userName;