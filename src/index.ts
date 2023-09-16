
import { OpenAI } from 'openai';
import { functions, chat } from './config.js';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const port = 8000;
const app = express();

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

async function assistant() {
    const payload = {
        messages: chat,
        model: 'gpt-3.5-turbo',
        functions: functions
    };
    //@ts-expect-error-uuugh..
    const completion = await openai.chat.completions.create(payload)
    console.log(JSON.stringify(payload, null, 2));
    completion.choices.map((choice: any) => {
        console.log(choice.message.function_call);
    }
    );
}

app.get('/', (req, res) => {
    assistant().catch();
    res.send('on');
});



app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});