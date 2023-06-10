import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ImageIDForm from "../components/ImageIdForm";

describe("ImageIDForm", () => {
  it("renders the component correctly", () => {
    render(<ImageIDForm />);
    
    // Assert the presence of input field, button, and text
    expect(screen.getByLabelText("Image ID")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
    expect(
      screen.getByText("Enter HiRISE image ID:", { exact: false })
    ).toBeInTheDocument();
  });

  it("displays an error popover when the ID length is less than 5", () => {
    render(<ImageIDForm />);
    
    // Get the input field and type a value with length less than 5
    const inputField = screen.getByLabelText("Image ID");
    fireEvent.change(inputField, { target: { value: "abc" } });
    
    // Click the search button
    const searchButton = screen.getByRole("button", { name: "Search" });
    fireEvent.click(searchButton);
    
    // Assert the presence of the error popover
    expect(
      screen.getByText("ID length should be at least 5 characters.")
    ).toBeInTheDocument();
  });

  
  it("calls the getResults function when the ID length is valid", () => {
    // Mock the getResults function
    const mockGetResults = jest.fn();
    
    render(
      <ImageIDForm
        getResults={mockGetResults}
        setResultsPending={() => {}}
      />
    );
    
    // Get the input field and type a value with length greater than or equal to 5
    const inputField = screen.getByLabelText("Image ID");
    fireEvent.change(inputField, { target: { value: "12345" } });
    
    // Click the search button
    const searchButton = screen.getByRole("button", { name: "Search" });
    fireEvent.click(searchButton);
    
    // Assert that getResults was called with the correct arguments
    expect(mockGetResults).toHaveBeenCalledWith("12345", "id");
  });
});
