import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../../pages/home';

jest.mock("axios", () => ({
  // Mocking the axios module
  get: jest.fn(() => Promise.resolve({ data: {} })),
}));
jest.mock("lottie-react", () => ({
  __esModule: true,
  default: () => <div>Mock Lottie Component</div>,
}));

describe('Home Component', () => {
  beforeEach(() => {
    render(
      <Router>
        <Home />
      </Router>
    );
  });

  test('should render the welcome message', () => {
    const welcomeText = screen.queryByText(/WELCOME,/i);
  
    expect(welcomeText).not.toBeNull();
  });
  

  test('should render the "Get Started" button', () => {
    const getStartedButton = screen.getByRole('button', { name: 'Get Started' });
    expect(getStartedButton).toBeInTheDocument();
  });

  // Add more test cases as needed
});
