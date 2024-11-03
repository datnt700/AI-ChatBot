/** @jsxImportSource @emotion/react */
import { Icon } from '@iconify/react';
import React from 'react';

import { buttonIconStyle } from './ButtonIcon.style';

interface ButtonIconProps {
  onClick: () => void;
}

export const ButtonIcon = ({ onClick }: ButtonIconProps) => {
  return (
    <button onClick={onClick} css={buttonIconStyle.container}>
      <Icon icon="ph:paper-plane-right-duotone" width="1.2em" height="1.2em" />
    </button>
  );
};
