import { mongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import forum from "@/models/forum";
export async function GET(req) {
    try {
      console.log("hit Get");
      await mongoDB();
      const url = new URL(req.url);
// Extract query parameters from the request URL
const id = url.searchParams.get('userId');
console.log(id)
      const forumInfo = await forum.findOne({ customerId: `${id}` }).sort({ createdAt: -1 });
      return NextResponse.json(forumInfo, { status: 201 });
    } catch (error) {
      console.error("Error in GET:", error);
      return NextResponse.json({ error: "Error retrieving forum info" }, { status: 500 });
    }
  }