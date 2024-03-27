
import mongoose,{Schema,models} from 'mongoose'

const forumSchema = new Schema({
    job:{
        type:String,
        required:true
    },
    workers:{
        type:String,
        required:true
    },
    hours:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    date:{
        type:String,
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
    customerCity:{
        type:String,
        required:true
    },
    customerZip:{
        type:String,
        required:true
    },
    customerEmail:{
        type:String,
        required:true
    },
    customerPhone:{
        type:String,
        required:true
    },
    customerId:{
        type:String,
        required:true
    },
    paid:{
        type:Boolean,
        required:true
    }
},
{timestamps:true} 
)

const forum = models.forum || mongoose.model('forum',forumSchema)
export default forum