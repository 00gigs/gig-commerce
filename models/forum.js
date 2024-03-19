
import mongoose,{Schema,models} from 'mongoose'
const forumSchema = new Schema({
    job:{
        type:String,
        required:true
    },
    workers:{
        type:Number,
        required:true
    },
    hours:{
        type:Number,
        required:true
    },
    time:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
  description:{
        type:String,
        required:true
    },
  customerName:{
        type:String,
        required:true
    },
  customerAddress:{
        type:String,
        required:true
    },
  customerContact:{
        type:String,
        required:true
    },
},
{timestamps:true} 
)

const forum = models.forum || mongoose.model('forum',forumSchema)
export default forum