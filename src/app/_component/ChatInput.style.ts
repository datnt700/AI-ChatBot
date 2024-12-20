import { css } from '@emotion/react';

import { colors } from '../styles/Global.style';

export const chatInputStyle = {
  container: css({
    padding: '1rem 0.8rem',
    border: `2px solid ${colors.grayDark}`,
    backgroundColor: colors.dark1,
    borderRadius: '0.5rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    textarea: {
      width: '100%',
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      color: colors.white,
      '::placeholder': {
        color: colors.grayDark,
      },
    },
  }),
};
