
import { streamText } from 'ai';

import { anthropic } from '@ai-sdk/anthropic';
const model = anthropic('claude-haiku-4-5'),

const stream = streamText({
  model,
  prompt: 'Give me a sonnet about a cat called Steven.',
});

for await (const chunk of stream.toUIMessageStream()) {
  console.log(chunk);
}
