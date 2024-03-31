import { mongoDB } from '@/lib/mongodb'
import User from '@/models/user'
import {NextResponse} from 'next/server'
import bcryptjs from 'bcryptjs'
import { VerifaliaRestClient } from 'verifalia';
export async function POST(req){
    try {
        const {username,email,password} = await req.json()
        const hashed = await bcryptjs.hash(password, 10);
        const VerifaliaClient = new VerifaliaRestClient({
            username:process.env.NEXT_PUBLIC_VERIFALIA_USERNAME,
            password:process.env.NEXT_PUBLIC_VERIFALIA_PASSWORD
        })
        const validateEmail = await VerifaliaClient.emailValidations.submit({
            entries: [
                {
                    inputData: email
                }
            ],
            quality: 'High',
            retention: '0:5:0' // 5 minutes
        });
        const isValid = validateEmail.entries[0].status === 'Success'

        if(!isValid){
            return NextResponse.json({message:`Invalid Email ${isValid.entries[0].classification}`},{status:400})
        }
       await mongoDB()
       const registerAccount = await User.create({username,email,password: hashed })

        return NextResponse.json({message:`user registered ${registerAccount}`},{status:201})
    } catch (error) {
        return NextResponse.json({message:'error while registering user'},{status:500})
    }
}