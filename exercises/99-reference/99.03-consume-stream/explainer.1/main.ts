import { anthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';

console.log('Process starting...');

const streamTextResult = streamText({
  model: anthropic('claude-haiku-4-5'),
  prompt: 'Hello, world!',
  onFinish: () => {
    console.log('Stream finished!');
  },
});

// Try commenting this out and see what happens!
await streamTextResult.consumeStream();

console.log('Process exiting...');
