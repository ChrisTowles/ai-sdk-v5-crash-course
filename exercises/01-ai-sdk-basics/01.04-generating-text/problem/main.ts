
import { generateText } from 'ai';

// TODO: Choose a model. I recommend using the Google Gemini model:
// gemini-2.0-flash-lite
import { anthropic } from '@ai-sdk/anthropic';
const model = anthropic('claude-haiku-4-5');
const prompt = 'What is the capital of France?';

const result = await generateText({model, prompt});

console.log(result.text);
