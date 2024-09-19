export const dynamic = "force-dynamic";

import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import * as https from 'https';

type ResponseData = {
    data: any;
    status: number;
}

export async function GET(request: NextRequest) {

    const accessToken = request.headers.get('Authorization');

    try {
        const url = new URL(request.url);
        const limit = url.searchParams.get("limit");

        console.log('my q',limit)

        if (!limit) {
            throw new Error("Query parameter 'q' is missing.");
        }

        const agent = new https.Agent({
            rejectUnauthorized: false
        });

        const response = await axios.get(`${process.env.API_URL}/api/v1/destination`, {
            params: {
                limit : limit,
                
            },
            httpsAgent: agent

          
          
        })

        console.log('this data', response)

        return NextResponse.json({
            data: response.data,
            status:response.status
        } as ResponseData);

    } catch (e: any) {
        console.log('Error:', e.message);
        return NextResponse.json({
            data: [],
            status: 400, 
            error: e.message 
        } as ResponseData);
    }
}
