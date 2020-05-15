import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
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
});

//render test
test("fields must render", () => {
  const { getByTestId } = render(<ContactForm />);
  getByTestId("firstName");
  getByTestId("lastName");
  getByTestId("email");
  getByTestId("message");
});

//testing text fields
test("can type in fields", () => {
    const { getByTestId } = render(<ContactForm />)
    const firstnameInput = getByTestId('firstName')
    const lastnameInput = getByTestId('lastName')
    const emailInput = getByTestId('email')
    const messageInput = getByTestId('message')
    
    fireEvent.change(firstnameInput, { target: { value: 'John' } })
    expect(firstnameInput.value).toBe('John')
    fireEvent.change(lastnameInput, { target: {value: 'Doe' } })
    expect(lastnameInput.value).toBe('Doe')
    fireEvent.change(emailInput, { target: { value: 'fake@email.com' } })
    expect(emailInput.value).toBe('fake@email.com')
    fireEvent.change(messageInput, { target: { value: 'this is a test message' } })
    expect(messageInput.value).toBe('this is a test message')
})

//tested filled form on submission

test("can submit filled form", async () => {
    const { getByTestId } = render(<ContactForm />)
     
    const firstnameInput = getByTestId('firstName')
    const lastnameInput = getByTestId('lastName')
    const emailInput = getByTestId('email')
    const messageInput = getByTestId('message')
    
    fireEvent.change(firstnameInput, { target: { value: 'John' } })  
    fireEvent.change(lastnameInput, { target: {value: 'Doe' } })
    fireEvent.change(emailInput, { target: { value: 'fake@email.com' } })
    fireEvent.change(messageInput, { target: { value: 'this is a test message' } })
    
    fireEvent.click(getByTestId('submitButton'))
    await waitForElement(() => getByTestId('submittedData'))
    //submission failed test 1 failed

})
//all test passed
//all passed break
