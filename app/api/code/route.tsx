// import { Configuration, OpenAIApi } from "openai";
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import OpenAI from 'openai';
// import { ChatCompletion } from 'openai/resources/index.mjs';
// import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import { useState } from 'react';


// const configuration = new Configuration ({
//     apiKey:process.env.OPENAI_API_KEY,
// });
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const instructionMessage :ChatCompletionMessageParam ={
    role:"system",
    content:"you are a code generator. you must answer only in markdown code snippets. Use code comments for explanations."
}
// eslint-disable-next-line react-hooks/rules-of-hooks
// const nstructionMessage  = useState<ChatCompletionMessageParam[]> ={
    
// }

// import React, { useState } from 'react';

// const InstructionComponent = () => {
//   const [instructionMessage, setInstructionMessage] = useState<ChatCompletionMessageParam[]>([
//     {
//       initialState: "system",
//       content: "you are a code generator. you must answer only in markdown code snippets. Use code comments for explanations.",
//     },
//   ]);
// };

// export default InstructionComponent;

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
            messages:[instructionMessage,...messages]
            // :[{"role": "system", "content": "You are a helpful assistant."},
            // {"role": "user", "content": "Who won the world series in 2020?"},
            // {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
            // {"role": "user", "content": "Where was it played?"}],
        });
     return NextResponse.json(response.choices[0].message)
    }catch(error){
        console.log("[CODE-ERROR]",error);
        return new NextResponse("internal error",{status:500})
    }
    
}