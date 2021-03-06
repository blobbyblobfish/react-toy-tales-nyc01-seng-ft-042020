import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  return(
    <div id="toy-collection">
      {props.toys.map((toy) => { return <ToyCard key={toy.id} deleteToy={props.deleteToy} updateToy={props.updateToy}toy={toy}/>})}
    </div>
  );
}

export default ToyContainer;
