import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../../App';

jest.mock("axios", () => ({
    // Mocking the axios module
    get: jest.fn(() => Promise.resolve({ data: {} })),
  }));
  jest.mock("lottie-react", () => ({
    __esModule: true,
    default: () => <div>Mock Lottie Component</div>,
  }));

test('renders home page', () => {
  render(<App />);

  const welcomeText = screen.queryByText(/WELCOME,/i);
  
  expect(welcomeText).not.toBeNull();
  expect(welcomeText).toBeInTheDocument();
});
/*
test('renders Mars Explorer page', () => {
  render(<App />);

  const marsExplorerElement = screen.getByText(/search/i);
  expect(marsExplorerElement).toBeInTheDocument();
});*/