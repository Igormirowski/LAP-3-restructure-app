import App from '../App';

describe('App', () => {
  let component, instance, form, nameInput;
  const fakeEvent = { preventDefault: () => "do nothing" };

  beforeEach(() => {
    component = shallow(<App />);
    instance = component.instance();
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

  test("clicking on a story triggers a handleStorySelect function", () => {
    component.setState({ stories: [ { id: 2503, headline: 'Disaster Strikes', snippet: 'It was a dark and stormy night...'} ] });
    const story1 = component.find('li').first();
    const handleStorySelect = sinon.spy(instance, 'handleStorySelect');
    story1.simulate('click');
    expect(handleStorySelect.calledOnce).toBe(true);
    expect(handleStorySelect.calledWith(2503)).toBe(true);
  });
});