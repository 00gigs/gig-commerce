
import {NextResposne} from 'next/server'

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export async function POST(req) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: req.body.price,
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      NextResposne.redirect(session.url,303)
    } catch (err) {
    NextResposne.json({body:'error',err},{status:500})
    }
  } else {
    
    NextResposne.setHeader('Allow', 'POST')
    NextResposne.json({body:'Not allowed'},{status:405})
  }
}