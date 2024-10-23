/** @jsxImportSource @emotion/react */
import { Icon } from '@iconify/react';
import React from 'react';

import { inputTextStyle } from './InputText.style';

interface InputTextProps {
  onChange: (e: string) => void;
}

export const InputText = ({ onChange }: InputTextProps) => {
  return (
    <div css={inputTextStyle.container}>
      <input
        type={'text'}
        placeholder={'Ask simple chat.ai anything'}
        onChange={(e) => onChange(e.target.value)}
      />
      <Icon
        icon="ph:paper-plane-right-duotone"
        width="1.2em"
        height="1.2em"
        style={{ color: '#8f8f8f' }}
      />
    </div>
  );
};
