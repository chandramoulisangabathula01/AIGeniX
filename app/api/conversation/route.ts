// import { Configuration, OpenAIApi } from "openai";
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import OpenAI from 'openai';


// const configuration = new Configuration ({
//     apiKey:process.env.OPENAI_API_KEY,
// });
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(
    req : Request
){
    try{
        const {userId} = auth();
        const body = await req.json();
        const { messages } = body;
        if(!userId){
            return new NextResponse("Unauthorized",{status:401});
        }
        // if(!configuration.apiKey){
        //     return new NextResponse("OpenAI API Key not configured",{status:500})
        // }

        if(!messages){
            return new NextResponse("messages are required",{status:400});
        }

        const response = await openai.chat.completions.create({
            model:"gpt-3.5-turbo",
            messages
            // :[{"role": "system", "content": "You are a helpful assistant."},
            // {"role": "user", "content": "Who won the world series in 2020?"},
            // {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
            // {"role": "user", "content": "Where was it played?"}],
        });
     return NextResponse.json(response.choices[0].message)
    }catch(error){
        console.log("[CONSERBVATION-ERROR]",error);
        return new NextResponse("internal error",{status:500})
    }
    
}