import { OpenAI } from 'openai';
import { functions, chat } from './config.js';

console.log(process.env.API_KEY);

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

async function assistant() {
    const payload = {
        messages: chat,
        model: 'gpt-3.5-turbo',
        functions: functions
    };
    // @ts-expect-error-uuugh..
    const completion = await openai.chat.completions.create(payload);
    console.log(JSON.stringify(payload, null, 2));
    completion.choices.map((choice: any) => {
        console.log(choice.message.function_call);
    });
}

Bun.serve({
  fetch(req: Request) {
    const url = new URL(req.url);
    
    if (url.pathname === "/") {
      return assistant()
        .then(() => {
          console.log("Assistant function completed");
          return new Response('Hello World');
        })
        .catch(error => {
          console.error("Error in assistant:", error);
          throw error;  // This will pass the error to Bun's error handler
        });
    }

    return new Response('Not Found', { status: 404 });
  },
  error(err: Error) {
    console.error("Server Error:", err);
    return new Response(`<pre>${err}\n${err.stack}</pre>`, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
  port: 8000
});
