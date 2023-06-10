import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ImageCoordinateForm from '../components/ImageCoordinateForm';

describe('ImageCoordinateForm', () => {
  test('should render the form correctly', () => {
    render(<ImageCoordinateForm />);

    // Assert the presence of form elements
    expect(screen.getByLabelText('Start')).toBeInTheDocument();
    expect(screen.getByLabelText('End')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  test('should update the longitude start value when the input changes', () => {
    render(<ImageCoordinateForm />);

    const startInput = screen.getByLabelText('Start');
    fireEvent.change(startInput, { target: { value: '10' } });

    expect(startInput.value).toBe('10');
  });

  test('should update the longitude end value when the input changes', () => {
    render(<ImageCoordinateForm />);

    const endInput = screen.getByLabelText('End');
    fireEvent.change(endInput, { target: { value: '20' } });

    expect(endInput.value).toBe('20');
  });

  test('should trigger the search function when the search button is clicked', () => {
    const mockGetResults = jest.fn();
    const mockSetResultsPending = jest.fn();

    render(<ImageCoordinateForm getResults={mockGetResults} setResultsPending={mockSetResultsPending} />);

    const searchButton = screen.getByRole('button', { name: 'Search' });
    fireEvent.click(searchButton);

    expect(mockGetResults).toHaveBeenCalled();
    expect(mockSetResultsPending).toHaveBeenCalled();
  });
});
