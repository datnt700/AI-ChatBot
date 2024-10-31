import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createResponse } from '../services/chatbox';

export const useAI = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createResponse,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['chatBox'] });
    },
  });
};
