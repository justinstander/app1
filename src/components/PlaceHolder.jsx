import React from 'react';

import {
  PlaceHolderContainer,
  PlaceHolderHeader,
  PlaceHolderJumbotron
} from './PlaceHolder.style';

const PlaceHolder = () => {
  return (
    <PlaceHolderContainer>
      <PlaceHolderHeader>
        <PlaceHolderJumbotron>
          <div>
            <h1>Coming Soon</h1>
            <h2>The Greatest Advertising Agency Ever</h2>
          </div>
        </PlaceHolderJumbotron>
   		</PlaceHolderHeader>
    </PlaceHolderContainer>
  );
}

export default PlaceHolder;
