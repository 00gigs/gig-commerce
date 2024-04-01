import {NextResponse} from 'next/server'

export async function POST(req){
const {input} = req.json()
const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${process.env.GOOGLE_API_KEY}`

try {
    const res = await fetch(url)
    const data = await res.json()
    return NextResponse.json(data,{status:201})
} catch (error) {
    return NextResponse.json({body:`Error from Google API: ${error.message}`},{status:500})
}

}