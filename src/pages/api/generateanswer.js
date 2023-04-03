import { Configuration, OpenAIApi } from "openai";

const Configuration1 = new Configuration({
    organization: process.env.OPENAI_ORG_ID,
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(Configuration1);

export default async function handler( req, res ){
    const prompt = req.body;

    if(!prompt || prompt === ''){
        return res.json({text: 'sorry , there was a problem!', status: 400});
    }
    const aiResult = await openai.createChatCompletion({
        model:'gpt-3.5-turbo',
        messages: [
            { role: 'user', content: prompt.email },
        ]
    });
    const Response = aiResult.data.choices[0].message;
    return res.json({text: Response, status: 200});
}