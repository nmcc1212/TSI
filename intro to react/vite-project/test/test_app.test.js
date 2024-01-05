/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../src/App';

describe('App component', () => {
  test('renders App component', () => {
    render(<App />);
    expect(screen.getByText('Tech News')).toBeInTheDocument();
  });

  test('navigates to Ukraine News when the route is changed', async () => {
    render(<App />);
    
    // Navigate to Ukraine News
    userEvent.click(screen.getByRole('link', { name: 'Ukraine News' }));

    // Assert that the page header is present
    expect(await screen.findByText('Ukraine News')).toBeInTheDocument();
  });

  test('navigates to World News when the route is changed', async () => {
    render(<App />);
    
    // Navigate to World News
    userEvent.click(screen.getByRole('link', { name: 'World News' }));

    // Assert that the page header is present
    expect(await screen.findByText('World News')).toBeInTheDocument();
  });
}
);