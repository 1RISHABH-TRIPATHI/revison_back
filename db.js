const mongoose=require('mongoose');

const url=process.env.URL;
mongoose.connect(url);

const db=mongoose.connection;
db.on('connected',()=>{
    console.log('Connected to MongoDB ');
})
db.on('disconnected',()=>{
    console.log('disconnect to mongodb ');
})
db.on('error',(err)=>{
    console.log('error  to mongodb ',err);
});

module.exports=db;