import React from "react";

import {
  PlaceHolderContainer,
  PlaceHolderHeader,
  PlaceHolderJumbotron
} from "./PlaceHolder.style";

const PlaceHolder = ({totalCost, getTotalCost}) => {
  getTotalCost();
  return (
    <PlaceHolderContainer>
      <PlaceHolderHeader>
        <PlaceHolderJumbotron>
          <div>
            <h1>Coming Soon</h1>
            <h2>The Greatest Advertising Agency Ever</h2>
          </div>
        </PlaceHolderJumbotron>
        <h4>Current Monthly Cost: {totalCost}</h4>
   	  </PlaceHolderHeader>
    </PlaceHolderContainer>
  );
};

export default PlaceHolder;
