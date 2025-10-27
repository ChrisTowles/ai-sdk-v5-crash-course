import { anthropic } from '@ai-sdk/anthropic';
import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  streamText,
  validateUIMessages,
  type ModelMessage,
  type UIMessage,
} from 'ai';

export const POST = async (req: Request): Promise<Response> => {
  const body = await req.json();

  let messages: UIMessage[];

  try {
    messages = await validateUIMessages({
      messages: body.messages,
    });
  } catch (error) {
    return new Response('Invalid messages', { status: 400 });
  }

  const modelMessages: ModelMessage[] =
    convertToModelMessages(messages);

  const streamTextResult = streamText({
    model: anthropic('claude-haiku-4-5');
    messages: modelMessages,
  });

  const stream = streamTextResult.toUIMessageStream();

  return createUIMessageStreamResponse({
    stream,
  });
};
