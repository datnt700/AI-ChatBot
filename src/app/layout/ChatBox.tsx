/** @jsxImportSource @emotion/react */

import Image from 'next/image';
import React, { useState } from 'react';

import aiIcon from '../../../public/images/logo-small.svg';
import { InputText } from '../../app/_component/InputText';

import { chatBoxStyle } from './ChatBox.style';

export const ChatBox = () => {
  const [, setText] = useState('');
  const onChange = (e: string) => {
    setText(e);
  };
  return (
    <div css={chatBoxStyle.container}>
      <div css={chatBoxStyle.chatBox}>
        <div css={chatBoxStyle.chatting}>
          <div css={chatBoxStyle.default}>
            <div css={[chatBoxStyle.box, chatBoxStyle.user]}>
              <p css={chatBoxStyle.userText}>
                Hey my name is Clara! How are you?
              </p>
            </div>
            <div css={[chatBoxStyle.box, chatBoxStyle.ai]}>
              <Image src={aiIcon} alt={'aiIcon'} width={15} height={15} />
              <p css={chatBoxStyle.aiText}>
                Hi, Clara. Im doing well. I just got back from the gym. How
                about yourself?
              </p>
            </div>
          </div>
        </div>
        <InputText onChange={onChange} />
      </div>
    </div>
  );
};
