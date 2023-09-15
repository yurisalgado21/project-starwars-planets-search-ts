import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import DataProvider from '../context/DataProvider';

test('I am your test', () => {
  render(
  <DataProvider>
    <App />
  </DataProvider>);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByText(/operador:/i)).toBeInTheDocument();
  expect(screen.getByText(/coluna:/i)).toBeInTheDocument();
});
