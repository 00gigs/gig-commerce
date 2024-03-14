import { mongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import {NextResponse} from 'next/server'


export async function POST(req){
    try {
        await mongoDB()
        //get user from req
        const {email} = await req.json()
        //find if email is already in database 
        const user = await User.findOne({email}).select("_id")
       
        return NextResponse.json({user})
    } catch (error) {
        console.log('validation error',error)
    }
}