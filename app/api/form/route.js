import {NextResponse} from 'next/server'
export async function POST(req){
    try {
        console.log('hit post!!!!')
      const forumResponse = await req.json()
        console.log(forumResponse)
      return NextResponse.json({message:`forum submitted`},{status:201})
    } catch (error) {
        
        return NextResponse.json({message:'error while submitting forum'},{status:500})
    }

}