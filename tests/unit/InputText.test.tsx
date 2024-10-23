import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';

import { InputText } from '../../src/app/_component/InputText';

describe('Input search Component', () => {
  it('should call onChange when user input', () => {
    const mockOnChange = vi.fn();
    render(<InputText onChange={mockOnChange} />);

    const input = screen.getByPlaceholderText('Ask simple chat.ai anything');
    fireEvent.change(input, { target: { value: 'China' } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
