/** @jsxImportSource @emotion/react */

import Image from 'next/image';
import React, { forwardRef, useState } from 'react';
import { Icon } from '@iconify/react';

import trashIcon from '../../../public/images/Trash.svg';
import sidebar from '../../../public/images/Off.svg';
import doneIcon from '../../../public/images/Done_round.svg';
import message from '../../../public/images/Chat_fill.svg';
import logo from '../../../public/images/logo-full.svg';

import { sideBarStyle } from './SideBar.style';

import { Conversations } from '@/app/types/Conversations';

interface sideBarProps {
  conversations: Conversations;
  handleAddConversation: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleChooseConversation: (e: number) => void;
  handleEdit: (e: number) => void;
  text: string;
  editing: boolean;
  setEditing: (e: boolean) => void;
  setText: (e: string) => void;
  handleDelete: (e: number) => void;
}

export const SideBar = forwardRef<HTMLInputElement, sideBarProps>(
  (
    {
      conversations,
      handleAddConversation,
      handleChooseConversation,
      handleEdit,
      editing,
      setEditing,
      text,
      setText,
      handleDelete,
    },
    ref
  ) => {
    const [isActive, setIsActive] = useState(false);

    const toggleSideBar = () => {
      setIsActive((e) => !e);
    };

    return (
      <>
        <div
          css={[sideBarStyle.container, isActive && sideBarStyle.activeOpen]}
        >
          <div css={sideBarStyle.header}>
            <Image
              src={logo}
              alt={'logo'}
              width={150}
              height={80}
              css={sideBarStyle.logo}
            />
            <button
              css={sideBarStyle.buttonSideBarClose}
              onClick={toggleSideBar}
            >
              <Image
                src={sidebar}
                alt={'sidebar'}
                width={40}
                height={40}
                css={sideBarStyle.sidebar}
              />
            </button>
          </div>
          <div css={sideBarStyle.content}>
            <input
              type={'text'}
              placeholder={'New Chat'}
              css={sideBarStyle.inputText}
              ref={ref}
              onKeyDown={handleAddConversation}
            />
            <div css={sideBarStyle.conversations}>
              <p css={sideBarStyle.title}>Conversations</p>
              <div css={sideBarStyle.listItem}>
                {conversations.map((conversation) => (
                  <div key={conversation.id} css={sideBarStyle.item}>
                    <button
                      css={sideBarStyle.btn}
                      onClick={() => handleChooseConversation(conversation.id)}
                    >
                      <Image
                        src={message}
                        alt={'message'}
                        width={20}
                        height={20}
                      />
                      {!editing ? (
                        <p>{conversation.title}</p>
                      ) : (
                        <input
                          type="text"
                          value={text}
                          onChange={(e) => setText(e.target.value)}
                        />
                      )}
                    </button>

                    <div css={sideBarStyle.function}>
                      {!editing ? (
                        <button
                          css={sideBarStyle.btn}
                          onClick={() => setEditing(true)}
                        >
                          <Icon
                            icon="fluent:edit-12-regular"
                            width="1.3em"
                            height="1.3em"
                            style={{ color: '#8f8f8f' }}
                          />
                        </button>
                      ) : (
                        <button
                          css={sideBarStyle.btn}
                          onClick={() => handleEdit(conversation.id)}
                        >
                          <Image
                            src={doneIcon}
                            alt={'doneIcon'}
                            width={20}
                            height={20}
                          />
                        </button>
                      )}

                      <button
                        css={sideBarStyle.btn}
                        onClick={() => handleDelete(conversation.id)}
                      >
                        <Image
                          src={trashIcon}
                          alt={'trashIcon'}
                          width={20}
                          height={20}
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button css={sideBarStyle.buttonSideBar} onClick={toggleSideBar}>
          <Image
            src={sidebar}
            alt={'sidebar'}
            width={40}
            height={40}
            css={sideBarStyle.sidebar}
          />
        </button>
      </>
    );
  }
);
SideBar.displayName = 'SideBar';
