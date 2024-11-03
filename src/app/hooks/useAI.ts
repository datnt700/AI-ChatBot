import { useMutation } from '@tanstack/react-query';

import { createResponseAI } from '../services/chatbox';

export const useAI = () => {
  return useMutation({
    mutationFn: createResponseAI,
  });
};
