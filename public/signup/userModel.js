const mongoose=require('mongoose');

const schema=new mongoose.Schema({
    name:String,
    email:String,
password:String
})


const user=mongoose.model('User',schema);

// export default user;