/** @jsxImportSource @emotion/react */

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

import aiIcon from '../../../public/images/logo-small.svg';
import { ChatInput } from '../../app/_component/ChatInput';
import { useAI } from '../../app/hooks/useAI';
import { SideBar } from '../../app/layout/SideBar';

import { chatBoxStyle } from './ChatBox.style';

import { Conversation, Conversations } from '@/app/types/Conversations';

export const ChatBox = () => {
  const [conversations, setConversations] = useState<Conversations>([
    {
      id: 1,
      title: 'How are you?',
      messages: [
        { sender: 'user', text: 'Hey my name is Clara! How are you?' },
        {
          sender: 'bot',
          text: 'Hi, Clara. Im doing well. I just got back from the gym. How about yourself?',
        },
      ],
    },
  ]);
  const [content, setContent] = useState<Conversation | undefined>({
    id: 1,
    title: 'How are you?',
    messages: [
      { sender: 'user', text: 'Hey my name is Clara! How are you?' },
      {
        sender: 'bot',
        text: 'Hi, Clara. Im doing well. I just got back from the gym. How about yourself?',
      },
    ],
  });
  const { mutateAsync: createResponseFn } = useAI();
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const textInputRef = useRef<HTMLInputElement | null>(null);
  const [text, setText] = useState('');
  const [editing, setEditing] = useState(false);

  // const updateConversationMessages = (updatedContent: Conversation) => {
  //   setConversations((prevConversations) =>
  //     prevConversations.map((conv) =>
  //       conv.id === updatedContent.id ? updatedContent : conv
  //     )
  //   );
  // };

  const handleClick = async (inputText: string) => {
    const userMessage = { sender: 'user' as const, text: inputText };
    const loadingBotMessage = { sender: 'bot' as const, text: 'Loading...' };

    if (content) {
      const updatedMessages = [
        ...content.messages,
        userMessage,
        loadingBotMessage,
      ];
      const updatedContent = { ...content, messages: updatedMessages };

      setContent(updatedContent);
    }

    const requestData = { inputs: inputText };
    try {
      const result = await createResponseFn(requestData);
      const botResponse = result[0].generated_text;

      setContent((prevContent) => {
        if (!prevContent) return prevContent; // Tránh cập nhật khi không có content

        const updatedMessages = prevContent.messages.map((msg) =>
          msg.text === 'Loading...' && msg.sender === 'bot'
            ? { ...msg, text: botResponse }
            : msg
        );

        return { ...prevContent, messages: updatedMessages };
      });

      setConversations((prevConversations) => {
        return prevConversations.map((conv) =>
          conv.id === content?.id
            ? {
                ...conv,
                messages: conv.messages.map((msg) =>
                  msg.text === 'Loading...' && msg.sender === 'bot'
                    ? { ...msg, text: botResponse }
                    : msg
                ),
              }
            : conv
        );
      });
    } catch (error) {
      console.error('Error creating response:', error);
    }
  };

  useEffect(() => {
    if (conversations.length) {
      localStorage.setItem('conversation', JSON.stringify(conversations));
    }
  }, [conversations]);

  const handleChooseConversation = (e: number) => {
    const chosenConversation = conversations.find((item) => e === item.id);
    setContent(chosenConversation);
  };

  const handleSend = () => {
    if (textAreaRef.current) {
      const text = textAreaRef.current.value;
      handleClick(text);
      textAreaRef.current.value = '';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleAddConversation = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (textInputRef.current) {
        const inputText = textInputRef.current.value;
        const newConversation: Conversation = {
          id:
            conversations.length > 0
              ? conversations[conversations.length - 1].id + 1
              : 1,
          title: inputText,
          messages: [],
        };
        setConversations([...conversations, newConversation]);
        textInputRef.current.value = '';
      }
    }
  };

  const handleEdit = (e: number) => {
    setConversations((prevConversations) =>
      prevConversations.map((conv) =>
        conv.id === e
          ? {
              ...conv,
              title: text,
            }
          : conv
      )
    );
    setEditing(false);
  };

  const handleDelete = (e: number) => {
    setConversations((prevConversations) =>
      prevConversations.filter((conv) => conv.id !== e)
    );
  };

  return (
    <div css={chatBoxStyle.container}>
      <SideBar
        conversations={conversations}
        ref={textInputRef}
        handleAddConversation={handleAddConversation}
        handleChooseConversation={handleChooseConversation}
        handleEdit={handleEdit}
        text={text}
        editing={editing}
        setEditing={setEditing}
        setText={setText}
        handleDelete={handleDelete}
      />
      <div css={chatBoxStyle.boxSection}>
        <div css={chatBoxStyle.chatBox}>
          <div css={chatBoxStyle.chatting}>
            <div css={chatBoxStyle.default}>
              {content?.messages.map((item, index) => (
                <React.Fragment key={`${item.text}-${index}`}>
                  {item.sender === 'user' && item.text !== '' && (
                    <div css={[chatBoxStyle.box, chatBoxStyle.user]}>
                      <p css={chatBoxStyle.userText}>{item.text}</p>
                    </div>
                  )}
                  {item.sender === 'bot' && item.text !== '' && (
                    <div css={[chatBoxStyle.box, chatBoxStyle.ai]}>
                      <Image
                        src={aiIcon}
                        alt={'aiIcon'}
                        width={15}
                        height={15}
                      />
                      <p css={chatBoxStyle.aiText} id={'response-text'}>
                        {item.text}
                      </p>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <ChatInput
            ref={textAreaRef}
            handleKeyDown={handleKeyDown}
            handleSend={handleSend}
          />
        </div>
      </div>
    </div>
  );
};
