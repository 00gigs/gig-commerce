//gets forum by its id 

import { mongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import forum from "@/models/forum";
export async function GET(req) {
    try {
      console.log("hit Get for id");
      await mongoDB();
      const url = new URL(req.url);
// Extract query parameters from the request URL
const id = url.searchParams.get('forumId');
console.log(id)
      const forumInfo = await forum.findById(id);
      console.log(forumInfo)
      return NextResponse.json(forumInfo, { status: 201 });
    } catch (error) {
      console.error("Error in GET:", error);
      return NextResponse.json({ error: "Error retrieving forum info" }, { status: 500 });
    }
  }
