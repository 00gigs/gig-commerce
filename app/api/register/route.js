import { mongoDB } from '@/lib/mongodb'
import User from '@/models/user'
import {NextResponse} from 'next/server'
import bcryptjs from 'bcryptjs'

export async function POST(req){
    try {
        const {username,email,password} = await req.json()
        const hashed = await bcryptjs.hash(password, 10);
        await mongoDB()
       const registerAccount = await User.create({username,email,password: hashed })

        return NextResponse.json({message:`user registered ${registerAccount}`},{status:201})
    } catch (error) {
        return NextResponse.json({message:'error while registering user'},{status:500})
    }
}