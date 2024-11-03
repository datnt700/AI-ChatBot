/** @jsxImportSource @emotion/react */
import React, { forwardRef } from 'react';

import { chatInputStyle } from './ChatInput.style';
import { ButtonIcon } from './ButtonIcon';

interface InputTextProps {
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  handleSend: () => void;
}

export const ChatInput = forwardRef<HTMLTextAreaElement, InputTextProps>(
  ({ handleKeyDown, handleSend }, ref) => {
    return (
      <div css={chatInputStyle.container}>
        <textarea
          ref={ref}
          placeholder={'Ask simple chat.ai anything'}
          onKeyDown={handleKeyDown}
        ></textarea>
        <ButtonIcon onClick={handleSend} />
      </div>
    );
  }
);

ChatInput.displayName = 'ChatInput';
