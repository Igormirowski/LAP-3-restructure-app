import React, { useState } from 'react';
import {FaveButton} from './..';



const Headlines = ({ stories, handleArticleSelect }) => {

    return(
        <ul>
          {/* // Pass explicit arguments to event handlers */}
        { stories.map(art => (
        <li key={art.id} onClick={() => handleArticleSelect(art.id)}>
        <FaveButton /> 
        <strong role="heading" aria-label="headline">{art.headline}</strong> {art.snippet}
        </li>)) }
        </ul>
    )
}

export default Headlines;
