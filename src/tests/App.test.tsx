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
  const inputRadioASC = screen.getByText(/ascendente/i);
  const inputRadioDESC = screen.getByText(/descendente/i);
  const buttonOrder = screen.getByRole('button', {
    name: /ordenar/i
  });
  expect(input).toBeInTheDocument();
  expect(spinbutton).toBeInTheDocument();
  expect(buttonFilter).toBeInTheDocument();
  expect(inputRadioASC).toBeInTheDocument();
  expect(inputRadioDESC).toBeInTheDocument();
  expect(buttonOrder).toBeInTheDocument();
  userEvent.type(input, 'tato');
  userEvent.type(spinbutton, '10000');
  userEvent.click(buttonFilter);
  userEvent.click(inputRadioASC);
  userEvent.click(buttonOrder);
});
