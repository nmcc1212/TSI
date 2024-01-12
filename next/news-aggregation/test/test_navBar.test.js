/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import NavBar from '../src/components/NavBar';
import '@testing-library/jest-dom'


describe('NavBar component', () => {
  it('renders the navbar', () => {
    const renderResult = render(
        <NavBar sendQueryToParent={() => {}} />
    );
    expect(renderResult.container.innerHTML).toContain('<nav class="border-blue-200 bg-blue-200 dark:bg-blue-200 dark:border-blue-200"><div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">');
  });

  // it('updates the query state when the search changes', () => {
  //   const sendQueryToParentMock = jest.fn();

  //   render(
  //       <NavBar sendQueryToParent={sendQueryToParentMock} />
  //   );

  //   const searchInput = screen.getByPlaceholderText('Search...');

  //   fireEvent.change(searchInput, { target: { value: 'new query' } });

  //   expect(searchInput.value).toBe('new query');
  //   expect(sendQueryToParentMock).toHaveBeenCalledWith('new query');
  // });

  // it('calls sendQueryToParent when the search button is clicked', () => {
  //   const sendQueryToParentMock = jest.fn();
  //   render(
  //       <NavBar sendQueryToParent={sendQueryToParentMock} />
  //   );

  //   const searchButton = screen.getByText('Search');

  //   fireEvent.click(searchButton);

  //   expect(sendQueryToParentMock).toHaveBeenCalled();
  // });
});
