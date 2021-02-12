# State and Eventing Todos

## Setup test suite
- [x] Install dependencies
- [x] Create test setup file and mocks

## Write tests
App
- [x] renders story headlines
- [x] greets a user as 'friend' if no username given
- [x] does not change greeting whilst a user enters input
- [x] greets a user by name if a username is given
- [x] clears user input after submission
- [x] changes featured story when a story headline is clicked
- [x] increases reader count when "I've read!" button is clicked

FaveButton
- [x] renders a span with a star (★) in it
- [x] toggles colour when clicked

## Pass tests!
App
- [x] add logic to greeting h3 that renders conditionally based on username in state
- [x] add onChange event to text input
- [x] create `handleInput` handler that updates the `nameInput` state to the value of the input
- [x] set the value of text input to be `nameInput`
- [x] add onSubmit event to form
- [x] create `handleFormSubmit` handler that sets the state username to the value of the state input and sets `nameInput` state to empty string
- [x] add onClick event to 'I've Read' button
- [x] create `increaseReadsCount` handler that increase `readsCount` state by 1
- [x] add onClick event to story `li`s
- [x] create `handleStorySelect` handler that receives story id, finds the chosen story by id and sets it as the `chosenStory` in state

FaveButton
- [x] add onClick event to span
- [x] add logic that changes style color property conditionally based on `faved` state
- [x] create `handleFave` handler that toggles `faved` state