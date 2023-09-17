import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import DataProvider from '../context/DataProvider';
import userEvent from '@testing-library/user-event';

test('I am your test', () => {
  render(
  <DataProvider>
    <App />
  </DataProvider>);
  const input = screen.getByRole('textbox');
  const spinbutton = screen.getByRole('spinbutton');
  const buttonFilter = screen.getByRole('button', {
    name: /filtrar/i
  })
  expect(input).toBeInTheDocument();
  expect(spinbutton).toBeInTheDocument();
  expect(buttonFilter).toBeInTheDocument();
  userEvent.type(input, 'tato');
  userEvent.type(spinbutton, '10000');
});
