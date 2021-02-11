# State and Eventing Todos

## Setup test suite
- [ ] Install dependencies
- [ ] Create test setup file and mocks

## Write tests
App
- [ ] renders story headlines
- [ ] greets a user as 'friend' if no username given
- [ ] does not change greeting whilst a user enters input
- [ ] greets a user by name if a username is given
- [ ] clears user input after submission
- [ ] changes featured story when a story headline is clicked
- [ ] increases reader count when "I've read!" button is clicked

FaveButton
- [ ] renders a span with a star (★) in it
- [ ] toggles colour when clicked

## Pass tests!
App
- [ ] add logic to greeting h3 that renders conditionally based on username in state
- [ ] add onChange event to text input
- [ ] create `handleInput` handler that updates the `nameInput` state to the value of the input
- [ ] set the value of text input to be `nameInput`
- [ ] add onSubmit event to form
- [ ] create `handleFormSubmit` handler that sets the state username to the value of the state input and sets `nameInput` state to empty string
- [ ] add onClick event to 'I've Read' button
- [ ] create `increaseReadsCount` handler that increase `readsCount` state by 1
- [ ] add onClick event to story `li`s
- [ ] create `handleStorySelect` handler that receives story id, finds the chosen story by id and sets it as the `chosenStory` in state

FaveButton
- [ ] add onClick event to span
- [ ] add logic that changes style color property conditionally based on `faved` state
- [ ] create `handleFave` handler that toggles `faved` state