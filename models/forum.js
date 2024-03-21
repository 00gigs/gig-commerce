
import mongoose,{Schema,models} from 'mongoose'
const forumSchema = new Schema({
    job:{
        type:Object,
        required:true
    },
    workers:{
        type:Object,
        required:true
    },
    hours:{
        type:Object,
        required:true
    },
    time:{
        type:Object,
        required:true
    },
    date:{
        type:Object,
        required:true
    },
  description:{
        type:Object,
        required:true
    },
  customerName:{
        type:Object,
        required:true
    },
  customerAddress:{
        type:Object,
        required:true
    },
  customerContact:{
        type:Object,
        required:true
    },
},
{timestamps:true} 
)

const forum = models.forum || mongoose.model('forum',forumSchema)
export default forum