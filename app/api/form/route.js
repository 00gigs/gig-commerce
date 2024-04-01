import { mongoDB } from '@/lib/mongodb'
import {NextResponse} from 'next/server'
import forum from '@/models/forum'
export async function POST(req){
    try {
        console.log('hit post!!!!')
      const forumResponse = await req.json()
      console.log(forumResponse)
        await mongoDB()
        const customerForum = await forum.create(forumResponse)
      return NextResponse.json({message:`forum submitted ${customerForum}`},{status:201})
    } catch (error) {
        return NextResponse.json({message:'error while submitting forum'},{status:500})
    }

}