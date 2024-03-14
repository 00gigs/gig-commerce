import { mongoDB } from '@/lib/mongodb'
import User from '@/models/user'
import {NextResponse} from 'next/server'
import bcryptjs from 'bcryptjs'

export async function POST(req){
    try {
        await mongoDB()
        const cred = await req.json
        const Account  = await User.findOne({username:cred.username})
        const match = await bcryptjs.compare(cred.password, Account.password);
        if (!match) {
            return NextResponse.json(
              { message: "Invalid email or password" },
              { status: 401 }
            );
          }
    

        return NextResponse.json({message:`user ${Account} logged in`},{status:201})
    } catch (error) {
        return NextResponse.json({message:'error while logging in user',error},{status:500})
    }
}