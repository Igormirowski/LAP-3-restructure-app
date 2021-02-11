import App from '../App';

describe('App', () => {
  let component, nameInput;
  const fakeEvent = { preventDefault: () => "do nothing" };

  beforeEach(() => {
    component = shallow(<App />);
    nameInput = component.find('#nameInput');
  });

  test("renders story headlines", () => {
    expect(component.find('ul').text()).toContain("Beware the Frumious Bandersnatch");
  });

  test("greets a user as 'friend' if no username given", () => {
    expect(component.find('#greeting').text()).toBe("Hi there, friend!");
  });

  test("does not change greeting whilst a user enters input", () => {
    nameInput.simulate("change", {target: {value: "Beth"}});
    expect(component.find('#greeting').text()).toBe("Hi there, friend!");
  });

  test("greets a user by name when user submits name", () => {
    nameInput.simulate("change", {target: {value: "Beth"}})
    component.find('form').simulate("submit", fakeEvent);
    expect(component.find('#greeting').text()).toBe("Hi there, Beth!");
  });

  test("clears user input after submission", () => {
    nameInput.simulate("change", {target: {value: "Beth"}})
    component.find('form').simulate("submit", fakeEvent);
    expect(component.find('#nameInput').props().value).toBe("");
  });

  test("changes featured story when a story headline is clicked", () => {
    const firstStory = component.find('li').first();
    const headline = firstStory.find('strong').text()
    firstStory.simulate('click');
    expect(component.find('#feature').text()).toContain(headline);
  });

  test("increases reader count when 'I\'ve read!' button is clicked", () => {
    const readButton = component.find('button');
    const initialReaderCount = component.find('#reads').text();
    readButton.simulate('click');
    const newReaderCount = component.find('#reads').text();
    expect(parseInt(newReaderCount)).toBe(parseInt(initialReaderCount) + 1)
  })
});