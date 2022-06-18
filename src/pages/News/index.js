import React, { useState } from 'react';
import { FaveButton, FeaturedArticle, Greeting, ReaderCount, Headlines } from '../../components';


export default () => {

    const [ articles, setStories ] = useState([
    { id: 2503, headline: 'Disaster Strikes', snippet: 'It was a dark and stormy night...'},
    { id: 1322, headline: 'Sunny Days Ahead', snippet: 'Even in the UK, beach days are still upon us.'},
    { id: 5541, headline: 'Beware the Frumious Bandersnatch', snippet: 'Twas brillig, and the slithy toves did gyre and gimble in the wabe.'}
  ])
  const [ chosenArticle, setChosenArticle ] = useState();


  const handleArticleSelect = articleId => {
    const chosenArticle = articles.find(art => art.id === articleId);
    setChosenArticle(chosenArticle);
  };

 
  // Pass explicit arguments to event handlers
  const renderStories = () => articles.map(art => <li key={art.id} onClick={() => handleArticleSelect(art.id)}><FaveButton /> <strong role="heading" aria-label="headline">{art.headline}</strong> {art.snippet}</li>)

  return (
    <div className="news-reader">
      <h1>A Real State of Events</h1>

      <aside>
        {/* Conditional rendering example 1 */}
        <Greeting />

        {/* Reading from state */}
        <ReaderCount stories={articles} handleArticleSelect={handleArticleSelect} />
       
      
        <img src="https://images.unsplash.com/photo-1566378246598-5b11a0d486cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="newspapers"/>
      </aside>

      <section>
        {/* Tidy rendering */}
        <ul> { <Headlines /> } </ul>

        {/* Conditional rendering example 2 */}
        { 
            chosenArticle && <FeaturedArticle chosenStory={chosenArticle} />
                
        }

      </section>

    </div>
  );
}
