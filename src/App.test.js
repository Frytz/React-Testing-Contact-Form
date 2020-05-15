import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "mutationobserver-shim";
// import App from "./App";
import ContactForm from './components/ContactForm';

// test("renders App without crashing", () => {
//   render(<App />);
// });
// submit test
test("cannot submit an empty form: must fail this test", () => {
  const { getByTestId } = render(<ContactForm />);
  fireEvent.click(getByTestId('submitButton'))
  getByTestId('submitted data')
//
});



