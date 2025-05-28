import { sendEmail } from "@/lib/helper";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
      const data  = await req.json();
      const res = await sendEmail({...data})

      if ("error" in res) {
        return NextResponse.error()
      }else{
        return new NextResponse(JSON.stringify({success: "Message sent"}))
      }
}