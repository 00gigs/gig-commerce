import Stripe from 'stripe'

import { NextResponse} from 'next/server'
const stripe = Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET)

export async function GET(){
    try {
        const products = await stripe.prices.list({limit:13})
       return NextResponse.json(products,{status:200})
        
    } catch (error) {
        return NextResponse.json({body:'Error getting products'},{status:500}) 
    }


}


