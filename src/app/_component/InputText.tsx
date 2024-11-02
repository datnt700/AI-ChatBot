/** @jsxImportSource @emotion/react */
import { Icon } from '@iconify/react';
import React, { forwardRef } from 'react';

import { inputTextStyle } from './InputText.style';

interface InputTextProps {
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  handleSend: () => void;
}

export const InputText = forwardRef<HTMLTextAreaElement, InputTextProps>(
  ({ handleKeyDown, handleSend }, ref) => {
    return (
      <div css={inputTextStyle.container}>
        <textarea
          ref={ref}
          placeholder={'Ask simple chat.ai anything'}
          onKeyDown={handleKeyDown}
        ></textarea>
        <Icon
          icon="ph:paper-plane-right-duotone"
          width="1.2em"
          height="1.2em"
          style={{ color: '#8f8f8f' }}
          onClick={handleSend}
        />
      </div>
    );
  }
);

InputText.displayName = 'InputText';
