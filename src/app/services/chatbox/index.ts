import axios from 'axios';

export const createResponseAI = async (data: object) => {
  const response = await axios.post(
    'https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill',
    data,
    {
      headers: {
        Authorization: 'Bearer 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',
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data;
};
