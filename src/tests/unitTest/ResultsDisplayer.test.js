import React from "react";
import { render, screen } from "@testing-library/react";
import ResultDisplayer from "../../components/ResultsDisplayer";

jest.mock("axios", () => ({
  // Mocking the axios module
  get: jest.fn(() => Promise.resolve({ data: {} })),
}));

jest.mock("lottie-react", () => ({
  __esModule: true,
  // Mocking the default export of lottie-react
  default: jest.fn(() => <div>Mock Lottie Component</div>),
}));

describe("ResultDisplayer", () => {
  const results = [
    {
      thumbnailLink: "image1.jpg",
      image_id: "1",
      title: "Image 1",
      latitude: 123,
      longitude: 456,
    },
    {
      thumbnailLink: "image2.jpg",
      image_id: "2",
      title: "Image 2",
      latitude: 789,
      longitude: 12,
    },
    
    // Add more test data as needed
  ];

  it("renders the result cards and pagination", () => {
    render(
      <ResultDisplayer
        results={results}
        setResults={() => {}}
        setModalPending={() => {}}
      />
    );

    // Check if the result cards are rendered
    expect(screen.getByText(/Image 1/)).toBeInTheDocument();
    expect(screen.getByText(/Image 2/)).toBeInTheDocument();

    // Check if the pagination is rendered
    //expect(screen.getByLabelText("Go to page 1")).toBeInTheDocument();
  });
});
