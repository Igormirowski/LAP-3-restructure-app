import React, { useState } from 'react';
import FaveButton from './components/FaveButton';
import './App.css';

function App() {
  const [ username, setUsername ] = useState("");
  const [ nameInput, setNameInput ] = useState("");
  const [ readsCount, setReadsCount ] = useState(0);
  const [ stories, setStories ] = useState([
    { id: 2503, headline: 'Disaster Strikes', snippet: 'It was a dark and stormy night...'},
    { id: 1322, headline: 'Sunny Days Ahead', snippet: 'Even in the UK, beach days are still upon us.'},
    { id: 5541, headline: 'Beware the Frumious Bandersnatch', snippet: 'Twas brillig, and the slithy toves did gyre and gimble in the wabe.'}
  ])
  const [ chosenStory, setChosenStory ] = useState();

  const increaseReadsCount = () => setReadsCount(prevState => prevState + 1);

  const handleStorySelect = storyId => {
    const chosenStory = stories.find(st => st.id === storyId);
    setChosenStory(chosenStory);
  };

  const handleInput = e => {
    setNameInput(e.target.value)
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    setUsername(nameInput);
    setNameInput("");
  };

  // Pass explicit arguments to event handlers
  const renderStories = () => stories.map(st => <li key={st.id} onClick={() => handleStorySelect(st.id)}><FaveButton /> <strong role="heading" aria-label="headline">{st.headline}</strong> {st.snippet}</li>)

  return(
    <div className="news-reader">
      <h1>A Real State of Events</h1>

      <aside>
        {/* Conditional rendering example 1 */}
        <h3 aria-label="greeting" id="greeting">Hi there, {username ? username : 'friend'}!</h3>

        {/* Form handling */}
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="That's not my name!" value={nameInput} onChange={handleInput}/>
          <input type="submit" value="Update!"/>
        </form>

        {/* Reading from state */}
        <p>There have been <span role="figure" id="reads">{readsCount}</span> reader(s)!</p>

        {/* Event handling */}
        <button aria-label="Read story" onClick={increaseReadsCount}>I've read!</button>
      
        <img src="https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="newspapers"/>
      </aside>

      <section>
        {/* Tidy rendering */}
        <ul> { renderStories() } </ul>

        {/* Conditional rendering example 2 */}
        { 
            chosenStory &&
                <article aria-label="featured story" id="feature"> {/* This should almost certainly be a separate component! */}
                  <h3>{chosenStory.headline}</h3>
                  <p>
                    {chosenStory.snippet} Cat ipsum dolor sit amet, meow loudly just to annoy owners or caticus cuteicus and the best thing in the universe is a cardboard box gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i don't want it anymore meow bye. Catch mouse and gave it as a present cat slap dog in face. Kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick, and preen away the embarrassment this is the day yet hate dog. Find something else more interesting blow up sofa in 3 seconds for meoooow cat cat moo moo lick ears lick paws kitty loves pigs, curl into a furry donut mewl for food at 4am. I will ruin the couch with my claws scratch at door to be let outside, get let out then scratch at door immmediately after to be let back in or asdflkjaertvlkjasntvkjn (sits on keyboard) walk on car leaving trail of paw prints on hood and windshield. Scamper purr like an angel and leave hair everywhere purr for no reason put butt in owner's face bleghbleghvomit my furball really tie the room together but i like frogs and 0 gravity. Good morning sunshine. Meow meow meow mama for destroy couch as revenge but headbutt owner's knee all of a sudden cat goes crazy. Human is washing you why halp oh the horror flee scratch hiss bite human is behind a closed door, emergency! abandoned! meeooowwww!!! scratch leg; meow for can opener to feed me or hunt anything that moves all of a sudden cat goes crazy. If it fits i sits. Making bread on the bathrobe. Find box a little too small and curl up with fur hanging out . Stinky cat i like cats because they are fat and fluffy or murder hooman toes i like fish lick plastic bags and grass smells good ears back wide eyed. Pet me pet me pet me pet me, bite, scratch, why are you petting me meow to be let in so i like frogs and 0 gravity, the best thing in the universe is a cardboard box. White cat sleeps on a black shirt asdflkjaertvlkjasntvkjn (sits on keyboard). Cats making all the muffins scamper eat from dog's food, but meow. Enslave the hooman trip owner up in kitchen i want food. Scratch at door to be let outside, get let out then scratch at door immmediately after to be let back in hunt anything that moves claw drapes. Run up and down stairs knock dish off table head butt cant eat out of my own dish scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food unwrap toilet paper litter box is life. More napping, more napping all the napping is exhausting plop down in the middle where everybody walks for the dog smells bad for stand in doorway, unwilling to chose whether to stay in or go out. Eat grass, throw it back up.
                  </p>
                </article>
        }

      </section>

    </div>
  );
};

export default App;
