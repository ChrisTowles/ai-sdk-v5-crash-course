import { anthropic } from '@ai-sdk/anthropic';
import { generateText } from 'ai';

// TODO: Choose a model. I recommend using the Google Gemini model:
// gemini-2.0-flash-lite
const model = anthropic('claude-3-haiku-20240307');
const prompt = 'What is the capital of France?';

const result = await generateText({model, prompt});

console.log(result.text);
