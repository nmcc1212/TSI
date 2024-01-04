/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import axios from 'axios';
import NewsList from '../src/newsList.tsx';

// Mocking axios
jest.mock('axios');

const mockData = [
  {
    title: 'Mock News Title 1',
    link: 'https://example.com/news1',
    contentSnippet: 'Mock content snippet 1',
    isoDate: '2023-01-01T12:00:00Z',
  },
  {
    title: 'Mock News Title 2',
    link: 'https://example.com/news2',
    contentSnippet: 'Mock content snippet 2',
    isoDate: '2023-01-02T12:00:00Z',
  },
];

describe('NewsList', () => {
  beforeEach(() => {
    // Reset the axios mock and userEvent mock before each test
    jest.clearAllMocks();
  });

  test('renders loading state initially', async () => {
    async () => {
    await act(async () => {
        render(<NewsList rssFeedUrls={[]} searchQuery="" />);
    }),
    await expect(screen.getByText('Loading...')).toBeInTheDocument();
    }
  });

  test('renders news items after data fetching', async () => {
    axios.post.mockResolvedValue({ data: mockData });
  
    await act(async () => {
      render(<NewsList rssFeedUrls={['https://example.com/feed']} searchQuery="" />);
    });

    expect(screen.queryByText('Loading...')).toBeNull();
  
    // Check that the news items are rendered
    expect(screen.getByText('Mock News Title 1')).toBeInTheDocument();
    expect(screen.getByText('Mock News Title 2')).toBeInTheDocument();
  });
  
});