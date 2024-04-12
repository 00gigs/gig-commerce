import { mongoDB } from '@/lib/mongodb'
import {NextResponse} from 'next/server'
import Reviews from '@/models/reviews'
export async function POST(req){
    try {
      const reviewResponse = await req.json()
      console.log(reviewResponse)
        await mongoDB()
        const customerReview = await Reviews.create(reviewResponse)
      return NextResponse.json({message:`Review submitted ${customerReview}`},{status:201})
    } catch (error) {
        return NextResponse.json({message:'error while submitting Review',error:error},{status:500})
    }

}