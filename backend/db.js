const mongoose =require('mongoose');
const mongoURL="mongodb://localhost:27017/Cafe"
const connectToMongo=()=>{
    mongoose.connect(mongoURL , ()=>{
        console.log("connected!")
    })
}
module.exports=connectToMongo;