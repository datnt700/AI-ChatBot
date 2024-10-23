'use client';

/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
export const GlobalStyles = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html,
      body {
        font-family: 'DM Sans', sans-serif;
        font-style: normal;
        background-color: ${colors.dark};
      }
    `}
  />
);

export const colors = {
  gray: '#B3B7B9',
  dark2: '#353839',
  dark1: '#242627',
  dark: '#141718',
  purple: '#6466E9',
  grayDark: '#6D7275',
  white: '#F6FCFD',
};
