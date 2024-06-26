import  mongoose,{Schema,models } from "mongoose";

const ReviewSchema = new Schema({
    starz:{
        type:Number,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
},
{timestamps:true} 
)

const Reviews = models.Reviews || mongoose.model('Reviews',ReviewSchema)

export default Reviews