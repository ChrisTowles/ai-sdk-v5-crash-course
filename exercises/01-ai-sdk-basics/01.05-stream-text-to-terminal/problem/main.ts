import { anthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';

const model = anthropic('claude-3-haiku-20240307');

const prompt =
  'Give me the first paragraph of a story about an imaginary planet.';

const stream = await streamText({model, prompt}); // TODO - stream some text with the model above.

for await (const chunk of stream.textStream) {
  process.stdout.write(chunk);
}
