const mongoose=require('mongoose')
const bcypt=require('bcrypt')
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
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

});
userNameSchema.pre('save',async function(req,res,next){
    try {
        const user=this;
        if(!user.isModified('password')) return next();
        const selt= await bcypt.selt(10);
        const hashpwd= await bcypt.hash(user.password,selt);
        user.password=hashpwd;
        next();
    } catch (error) {
       return next(error);
    }
       
});
userNameSchema.methods.comparePwd=async function (pwd){
        try {
            const isMatch= await bcypt.compare(pwd,this.password);
            return isMatch;
        } catch (error) {
            throw error;
        }
}
const userName=mongoose.model('users',userNameSchema);
module.exports=userName;