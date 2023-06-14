import React from 'react';
import { render } from '@testing-library/react';
import MenuBar from '../../components/MenuBar';

jest.mock("lottie-react", () => ({
  __esModule: true,
  default: () => <div>Mock Lottie Component</div>,
}));

describe('MenuBar', () => {
  test('renders without errors', () => {
    render(<MenuBar />);
  });
  
  test('displays the logo', () => {
    const { getByAltText } = render(<MenuBar />);
    const logoElement = getByAltText('Logo');
    expect(logoElement).toBeInTheDocument();
  });

  test('displays the menu options', () => {
    const { getByText } = render(<MenuBar />);
    const moreDetailsLink = getByText('More Details');
    const aboutUsLink = getByText('About Us');
    expect(moreDetailsLink).toBeInTheDocument();
    expect(aboutUsLink).toBeInTheDocument();
  });
});
