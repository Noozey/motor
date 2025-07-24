import { getAllNewEVVehicleDetails, registerEvExchangeDetails } from '@/actions/exchangeEV.action';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
    try{
        const data=await req.json();

        const result= await registerEvExchangeDetails(data);
          if (!result.success) {
            return NextResponse.json(
                { error: result.message || "Failed to fetch categories" },
                { status: 500 }
            );
        }

        return NextResponse.json({ result }, { status: 200 });
        
    }catch(error){
        console.error('Error in exchange ev request:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
   
}


export async function GET(req: NextRequest) {
    try {
        const result=await getAllNewEVVehicleDetails();
         if (!result.success) {
            return NextResponse.json(
                { error: result.message || "Failed to fetch categories" },
                { status: 500 }
            );
        }

        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        console.error('Error in GET request:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
