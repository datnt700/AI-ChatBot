import { css } from '@emotion/react';

import { colors } from '../styles/Global.style';

export const chatBoxStyle = {
  container: css({
    backgroundImage: "url('./images/hero-image-sc.jpg')",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '20rem',
    padding: '1rem',
  }),
  chatBox: css({
    borderTop: `1px solid ${colors.dark2}`,
    borderRight: `1px solid ${colors.dark2}`,
    borderLeft: `1px solid ${colors.dark2}`,
    maxWidth: '800px',
    height: '600px',
    margin: '0 auto',
    backgroundColor: colors.dark1,
    borderRadius: '0.5rem',
    position: 'relative',
    top: '5rem',
  }),
  chatting: css({
    padding: '1.6rem',
  }),
  default: css({
    color: colors.white,
    fontSize: '0.875rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.8rem',
  }),
  box: css({
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'flex-start',
  }),
  user: css({
    alignSelf: 'flex-end',
  }),
  ai: css({
    alignSelf: 'flex-start',
  }),
  userText: css({
    borderRadius: '0.5rem',
    padding: '1rem',
    backgroundColor: colors.purple,
  }),
  aiText: css({
    borderRadius: '0.5rem',
    padding: '1rem',
    backgroundColor: colors.dark,
  }),
};
