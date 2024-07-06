import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test("test input", () => {
  render(<App />);
  const text = screen.getByRole("textbox")
  const textByPlaceholder = screen.getByPlaceholderText("Enter user name")

  expect(text).toBeInTheDocument();
  expect(textByPlaceholder).toBeInTheDocument();
  expect(text).toHaveAttribute("name", "username")
  expect(text).toHaveAttribute("placeholder", "Enter user name")
})

describe.skip('UI Group 1', () => {
  test("ui test 1", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  })
  test("ui test 2", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  })

})

describe('API Group 1', () => {
  test("api test 1", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  })
  test("api test 2", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  })

  describe('sub api testing 1', () => {
    test("api test 2", () => {
      render(<App />);
      const linkElement = screen.getByText(/learn react/i);
      expect(linkElement).toBeInTheDocument();
    })
  })

})