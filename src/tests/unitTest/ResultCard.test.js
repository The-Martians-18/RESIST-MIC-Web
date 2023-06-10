import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import ResultCard from "../components/ResultCard";

jest.mock("axios", () => ({
    // Mocking the axios module
    get: jest.fn(() => Promise.resolve({ data: {} })),
    request: jest.fn(() => Promise.resolve({ data: {} })),
  }));
  jest.mock("lottie-react", () => ({
    __esModule: true,
    // Mocking the default export of lottie-react
    default: jest.fn(() => <div>Mock Lottie Component</div>),
  }));

describe("ResultCard", () => {
  const mockProps = {
    image: "test-image.jpg",
    name: "Test Name",
    latitude: 123.456,
    longitude: 78.9,
    id: 1,
    index: 0,
    setResults: jest.fn(),
    results: [],
    setModalPending: jest.fn(),
  };

  test("renders card content correctly", () => {
    render(<ResultCard {...mockProps} />);
    expect(screen.getByText(/Name: Test Name/i)).toBeInTheDocument();
    expect(screen.getByText(/ID: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Latitude: 123.456/i)).toBeInTheDocument();
    expect(screen.getByText(/Longitude: 78.9/i)).toBeInTheDocument();
  });

  

  test("handles click when image is already received", async () => {
    render(<ResultCard {...mockProps} results={[{ imageReceived: true }]} />);
    fireEvent.click(screen.getByAltText(/HiRISE Image/i));

    expect(mockProps.setModalPending).toBeCalledWith(true);
    expect(axios.request).not.toBeCalled();
    expect(screen.getByText(/Name: Test Name/i)).toBeInTheDocument();
    expect(mockProps.setModalPending).toBeCalledWith(false);
  });
});
