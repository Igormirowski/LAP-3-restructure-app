# State and Eventing Todos

## Setup test suite
- Install dependencies
- Create test setup file and mocks

## Write tests
App
- renders story headlines
- greets a user as 'friend' if no username given'
- update state when a user enters input
- greets a user by name if a username is given
- clears user input after submission
- triggers `handleStorySelect` method when a story headline is clicked
- increases reader count when "I've read!" button is clicked

FaveButton
- renders a span with a star (★) in it
- shows a grey star if the story is not faved
- shows a gold star if the story is faved
- toggles faved state when clicked

## Pass tests!
App
- add logic to greeting h3 that renders conditionally based on username in state
- add onChange event to text input
- create `handle Input` method that updates the `state.nameInput` to the value of the input
- set the value of text input to be `state.nameInput`
- add onSubmit event to form
- create `handleFormSubmit` method that sets the state username to the value of the state input and sets `state.nameInput` to empty string
- add onClick event to I've Read button
- create `increaseReadsCount` method that increase `state.readsCount` by 1
- add onClick event to story `li`s
- create `handleStorySelect` method that receives story id, finds the chosen story by id and sets it as the `chosenStory` in state

FaveButton
- add onClick event to span
- add logic that changes style color property conditionally based on `state.faved`
- create `handleFave` method that toggles `state.faved`