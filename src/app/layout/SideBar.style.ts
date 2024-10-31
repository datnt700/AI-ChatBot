import { css } from '@emotion/react';

import { colors } from '@/app/styles/Global.style';

export const sideBarStyle = {
  container: css({
    backgroundColor: colors.dark,
    width: '100%',
    height: '100vh',
    position: 'absolute',
    zIndex: '10',
    transform: 'translateX(-100%)',
    transition: 'all 0.3s ease-in',
    opacity: 0,
    '@media screen and (min-width: 1024px)': {
      maxWidth: '300px',
    },
  }),
  header: css({
    display: 'flex',
    alignItems: 'center',
  }),
  logo: css({
    padding: '1rem',
  }),
  buttonSideBar: css({
    backgroundColor: 'transparent',
    border: 'none',
    padding: '1rem',
  }),
  content: css({
    padding: '1rem',
  }),
  inputText: css({
    padding: '1rem 0 1rem 2.5rem',
    backgroundColor: 'transparent',
    border: `1px solid ${colors.grayDark}`,
    width: '100%',
    borderRadius: '0.5rem',
    backgroundImage: "url('./images/Add_round_fill.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '2% 45%',
    color: colors.grayDark,
    outline: 'none',
  }),
  activeOpen: css({
    opacity: 1,
    transform: 'translateX(0)',
  }),
  buttonSideBarClose: css({
    backgroundColor: 'transparent',
    border: 'none',
    padding: '1rem',
    position: 'absolute',
    right: '0',
  }),
  sidebar: css({
    padding: '0.5rem',
    backgroundColor: colors.dark,
    borderRadius: '0.5rem',
  }),
  conversations: css({
    margin: '1rem 0',
  }),
  title: css({
    color: colors.white,
  }),
  listItem: css({
    display: 'flex',
    flexDirection: 'column',
    marginTop: '0.8rem',
  }),
  item: css({
    padding: '1rem 0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '&:hover': {
      backgroundColor: colors.dark2,
      borderRadius: '0.5rem',
    },
  }),
  btn: css({
    backgroundColor: 'transparent',
    border: 'none',
    color: colors.white,
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  }),
  function: css({
    display: 'flex',
    gap: '0.5rem',
  }),
};
