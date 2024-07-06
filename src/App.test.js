import { render, screen } from '@testing-library/react';
import App from './App';

// Individual test case
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Group test case for form element/inputs
describe('UI Group 1', () => {
  test("ui test for full name", () => {
    render(<App />);
    const fullNameInput = screen.getByPlaceholderText('Enter your full name');

    expect(fullNameInput).toBeInTheDocument();
    expect(fullNameInput).toHaveAttribute('name', 'full name');
    expect(fullNameInput).toHaveAttribute('placeholder', 'Enter your full name');
  })
  test("test username input", () => {
    render(<App />);
    const usernameInput = screen.getByPlaceholderText("Enter user name")

    expect(usernameInput).toBeInTheDocument();
    expect(usernameInput).toHaveAttribute("name", "username")
    expect(usernameInput).toHaveAttribute("placeholder", "Enter user name")
  })
  test("ui test for password", () => {
    render(<App />);
    const fullNameInput = screen.getByPlaceholderText('Enter your password');
    expect(fullNameInput).toBeInTheDocument();
    expect(fullNameInput).toHaveAttribute('name', 'password');
    expect(fullNameInput).toHaveAttribute('placeholder', 'Enter your password');
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