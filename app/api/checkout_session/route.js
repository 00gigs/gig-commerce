import {NextResponse} from 'next/server'
import Stripe from 'stripe'

export async function POST(req) {
const stripe = Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET)
const url = new URL(req.url)
const id = url.searchParams.get('priceId')
console.log(id)
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            
            price: id,
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url:'http://localhost:3001/ThankYou' ,
        cancel_url: 'http://localhost:3001/Payment'
      });
      return new NextResponse(JSON.stringify({ url: session.url }), {
        status: 200, // Use 200 OK status when successfully creating a session
        headers: {
            'Content-Type': 'application/json',
        }
    })
    } catch (err) {
    return NextResponse.json({body:'error'},{status:500})
    }
  }  
    
