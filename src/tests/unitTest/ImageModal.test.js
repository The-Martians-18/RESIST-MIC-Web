import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ImageModal from '../../components/ImageModal';
jest.mock("axios", () => ({
    // Mocking the axios module
    get: jest.fn(() => Promise.resolve({ data: {} })),
  }));
jest.mock("lottie-react", () => ({
    __esModule: true,
    default: () => <div>Mock Lottie Component</div>,
  }));

describe('ImageModal', () => {
  const mockProps = {
    open: true,
    setOpen: jest.fn(),
    name: 'Test Image',
    id: '123',
    hirise: 'https://example.com/image.jpg',
    longitude: '0.123',
    latitude: '0.456',
  };

  test('renders the component', () => {
    render(<ImageModal {...mockProps} />);
    // Add your assertions here
  });

  test('closes the modal when the close button is clicked', () => {
    render(<ImageModal {...mockProps} />);
    const closeButton = screen.getByLabelText('close');
    fireEvent.click(closeButton);
    expect(mockProps.setOpen).toHaveBeenCalledWith(false);
  });

  // Add more test cases as needed

});
