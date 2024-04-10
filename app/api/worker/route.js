import { mongoDB } from '@/lib/mongodb'
import workerInfoForum from '@/models/workers'
import {NextResponse} from 'next/server'


export async function POST(req){
    let mongoDBDoc;
    try {
        const workerInfo = await req.json()
        await mongoDB()
        const mongoDBDoc = await workerInfoForum.create(workerInfo) 
        return NextResponse.json({message:`worker info success ${mongoDBDoc}` },{status:201})
    } catch (error) {
        console.error('Error posting worker info:', error);
        return NextResponse.json({message:`worker info failed ${mongoDBDoc}` },{status:500})
    }
}