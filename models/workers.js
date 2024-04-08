import mongoose, {models, Schema} from "mongoose";

const workerInfo = new Schema({
    zip:{
        type:Number,
        required:true
    },
    city:{
         type:String,
         required:true
    },
    email:{
         type:String,
        required:true
    },
    number:{
         type:Number,
        required:true
    },
    firstName:{
         type:String,
        required:true
    },
    lastName:{
         type:String,
        required:true
    },
})

const workerInfoForum = models.workerInfoForum || mongoose.model('workerInfoForum',workerInfo) 
export default workerInfoForum