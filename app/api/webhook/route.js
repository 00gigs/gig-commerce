import forum from '@/models/forum'
import { mongoDB } from '@/lib/mongodb'
import {NextResponse} from 'next/server'
export async function POST(req){
    // const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
    // const endpointSecret = "whsec_43a236b0ea3cd16f75c1ebf78cd3920f4fd7d5588327def73d427c6364c6665a"
    const payload =  await req.json()
    // const signature = req.headers.get('stripe-signature')
    try {
        
        console.log('post hit for webhook')
        console.log('payload',payload)
        if(payload.type === 'payment_intent.succeeded'){
            console.log('success ')

//create paymentIntent model and send payload data to mongo DB to see if user paid or not.
//UPDATE method on  forum to set paid to be true (conditional)
            await mongoDB()
            const paidBoolean = await forum.findOne({customerId:payload.customer}).sort({createdAt:-1}).updateOne({paid:true})
            console.log(paidBoolean.paid)
        }
            return NextResponse.json({status:'succeeded',payload})
    } catch (error) {
        return NextResponse.json({status:'failed',error})
    }
}

