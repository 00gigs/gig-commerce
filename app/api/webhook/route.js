import Stripe from 'stripe'

import {NextResponse} from 'next/server'



const stripe = new Stripe(process.env.NEXTAUTH_STRIPE_SECRET)
export async function POST(req){

    const payload = await req.text()
    const response = JSON.parse(payload)

    const signature = req.headers.get('Stripe-Signature')

    const dateTime = new Date(response?.created * 1000).toLocaleDateString()
    const timeString = new Date(response?.created * 1000).toLocaleDateString()

    try {
        let event = stripe.webhooks.constructEvent(payload,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET)
            console.log('event',event.type)
            switch (event.type) {
                case 'charge.failed':
                  const chargeFailed = event.data.object;
                  // Then define and call a function to handle the event charge.failed
                  console.log('chargeFailed',chargeFailed)
                  break;
                case 'charge.pending':
                  const chargePending = event.data.object;
                  // Then define and call a function to handle the event charge.pending
                  console.log('chargePending',chargePending)
                  break;
                case 'charge.succeeded':
                  const chargeSucceeded = event.data.object;
                  // Then define and call a function to handle the event charge.succeeded
                  console.log('chargeSucceeded',chargeSucceeded)
                  break;
                // ... handle other event types
                default:
                  console.log(`Unhandled event type ${event.type}`);
              }
return NextResponse.json({event:event.type, status:'success'})
    } catch (error) {
        return NextResponse.json({status:'failed',error})
    }


}