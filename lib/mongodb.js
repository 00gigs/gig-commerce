import mongoose from 'mongoose'

export const mongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI)
        console.log('connected')
    } catch (error) {
        console.log('error connecting to mongoDB',error)
    }
}