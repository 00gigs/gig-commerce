
import {NextResponse} from 'next/server'
import Stripe from 'stripe'

export async function POST(req) {
const stripe = Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET)
const url = new URL(req.url)
const id = url.searchParams.get('priceId')
const userId = url.searchParams.get('userID')
console.log(id)

const customer = await stripe.customers.create({
  email:userId
})
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            
            price: id[0],
            quantity: 1,
          },
        ],
        mode: 'payment',
        customer_email:customer.email,
        success_url:'https://www.hanzhomesolutions.com/ThankYou' ,
        cancel_url: 'https://www.hanzhomesolutions.com/Payment'
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
    
