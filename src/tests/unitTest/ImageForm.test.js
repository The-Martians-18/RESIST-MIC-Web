import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ImageForm from '../../components/ImageForm';

describe('ImageForm', () => {
    test('renders tabs and content', () => {
        const props = {
          tabVal: 0,
          changeTab: jest.fn(),
          getResults: jest.fn(),
          setResultsPending: jest.fn(),
        };
        render(<ImageForm {...props} />);
    
        const singleImageTab = screen.getByRole('tab', { name: /Single image Analysis/i });
        const largeScaleTab = screen.getByRole('tab', { name: /Large Scale Exploration/i });
        const uploadImageTab = screen.getByRole('tab', { name: /Upload Image for Analysis/i });
        const imageIdForm = screen.getByLabelText('Image ID');
        // const latitudeForm = screen.getByLabelText('Latitude');
    
        expect(singleImageTab).toBeInTheDocument();
        expect(largeScaleTab).toBeInTheDocument();
        expect(uploadImageTab).toBeInTheDocument();
        expect(imageIdForm).toBeInTheDocument();
        // expect(latitudeForm).toBeInTheDocument();
      });

      

  test('changes tab on tab selection', () => {
    const props = {
      tabVal: 0,
      changeTab: jest.fn(),
      getResults: jest.fn(),
      setResultsPending: jest.fn(),
    };

    render(<ImageForm {...props} />);

    const largeScaleTab = screen.getByRole('tab', { name: /Large Scale Exploration/i });
    fireEvent.click(largeScaleTab);

    expect(props.changeTab).toHaveBeenCalledTimes(1);
    //expect(props.changeTab).toHaveBeenCalledWith(1);
  });
});
