import { mongoDB } from "@/lib/mongodb";
import {NextResponse} from 'next/server'
import forum from "@/models/forum";


export async function  GET(){
    try {
        await mongoDB()
        const dates = await forum.find()
        return NextResponse.json(dates,{status:200})
    } catch (error) {
        return NextResponse.json({body:'error getting dates'},{status:500})
    }
}