/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Page from '../src/app/[[...newsSource]]/page';
import NavBar from '../src/components/navBar';

describe('App component', () => {
  test('renders App component', () => {
    render(<Page params={{}}/>);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('navigates to Ukraine News when the route is changed', async () => {
    render(<NavBar />);
    render(<Page params={{}} />);
    
    // Navigate to Ukraine News
    userEvent.click(screen.getByRole('link', { name: 'Ukraine News' }));

    // Assert that the page header is present
    expect(await screen.findByText('Ukraine News')).toBeInTheDocument();
  });

  test('navigates to World News when the route is changed', async () => {
    render(<NavBar />);
    render(<Page params={{}} />);
    
    // Navigate to World News
    userEvent.click(screen.getByRole('link', { name: 'World News' }));

    // Assert that the page header is present
    expect(await screen.findByText('World News')).toBeInTheDocument();
  });
}
);