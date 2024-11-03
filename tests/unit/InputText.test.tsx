import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';

import { ChatInput } from '../../src/app/_component/ChatInput';

describe('Input search Component', () => {
  test('should call handleKeyDown when Enter key is pressed', () => {
    const handleSend = vi.fn();
    const handleKeyDown = vi.fn();

    render(<ChatInput handleKeyDown={handleKeyDown} handleSend={handleSend} />);

    const textArea = screen.getByPlaceholderText('Ask simple chat.ai anything');
    fireEvent.keyDown(textArea, { key: 'Enter', code: 'Enter' });

    expect(handleKeyDown).toHaveBeenCalled();
  });
});
