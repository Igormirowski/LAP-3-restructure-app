import React from 'react';
import './setupTests';

import { shallow } from 'enzyme';

import App from '../App';

describe('App', () => {
  let component, form, nameInput;
  const fakeEvent = { preventDefault: () => console.log('preventDefault') };

  beforeEach(() => {
    component = shallow(<App />);
    form = component.find('form');
    nameInput = component.find('#nameInput');
  });

  test("renders story headlines", () => {
    expect(component.find('ul').text()).toContain("Beware the Frumious Bandersnatch");
  });

  test("greets a user as 'friend' if no username given", () => {
    expect(component.find('#greeting').text()).toBe("Hi there, friend!");
  });

  test("updates state when a user enters input", () => {
    nameInput.simulate("change", {target: {name: "nameInput", value: "B"}});
    expect(component.state('nameInput')).toBe('B');
  });

  test("greets a user by name if a username is given", () => {
    nameInput.simulate("change", {target: {name: "nameInput", value: "Beth"}})
    form.simulate("submit", fakeEvent);
    expect(component.find('#greeting').text()).toBe("Hi there, Beth!");
  });

  test("clears user input after submission", () => {
    nameInput.simulate("change", {target: {name: "nameInput", value: "Beth"}})
    form.simulate("submit", fakeEvent);
    expect(component.find('#nameInput').props().value).toBe("");
  });
});