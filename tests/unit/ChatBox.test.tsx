import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import React from 'react';

import { ChatBox } from '../../src/app/layout/ChatBox';

describe('ChatBox Component', () => {
  it('should render default conversation in chat box', () => {
    render(<ChatBox />);

    const text = screen.getByText('Hey my name is Clara! How are you?');
    expect(text).toBeInTheDocument();
  });
});
