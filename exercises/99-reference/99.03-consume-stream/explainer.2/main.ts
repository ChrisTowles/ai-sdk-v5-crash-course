import { anthropic } from '@ai-sdk/anthropic';
import { consumeStream, streamText } from 'ai';

console.log('Process starting...');

const streamTextResult = streamText({
  model: anthropic('claude-haiku-4-5');
  prompt: 'Hello, world!',
  onFinish: () => {
    console.log('Stream finished!');
  },
});

// Try commenting this out and see what happens!
await consumeStream({
  stream: streamTextResult.toUIMessageStream(),
});

console.log('Process exiting...');
