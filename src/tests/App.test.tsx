import React from 'react';
import { render, screen } from '@testing-library/react';
import { Sum } from '../views/Sum';

test('renders historical view', () => {
  // render(<App />);
  // const linkElement = screen.getByText(/Historical View/i);
  // expect(linkElement).toBeInTheDocument();
  expect(Sum()).toBe(5);
});
