import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MarsExplorer from '../../pages/marsExplorer';
import axios from 'axios';

jest.mock("axios", () => ({
    request: jest.fn(() => Promise.resolve({ data: {} })),
  get: jest.fn(() => Promise.resolve({ data: {} })),
  }));
jest.mock("lottie-react", () => ({
    __esModule: true,
    default: () => <div>Mock Lottie Component</div>,
  }));

describe('MarsExplorer', () => {
  test('renders MarsExplorer component', () => {
    render(<MarsExplorer />);
    
    // Add your assertions here to check if the component renders correctly
    // For example:
    expect(screen.getByText('for Martian Inverted Channels')).toBeInTheDocument();
  });

  test('handles tab change', () => {
    render(<MarsExplorer />);
  
    // Simulate tab change
    const tabs = screen.getAllByRole('tab');
    fireEvent.click(tabs[1]);
  
    // Add your assertions here to check if the tab value is updated correctly
    // For example:
    expect(tabs[0]).not.toHaveAttribute('aria-selected', 'true');
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
  });

});
