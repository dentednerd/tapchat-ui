import React from 'react';
import TapCard from './TapCard';

function App() {
  return (
    <div>
      <h1>Tapchat</h1>
      <div className="tapboard">
        <TapCard word="yo" />
        <TapCard word="we" />
        <TapCard word="are" />
        <TapCard word="here" />
      </div>
    </div>
  );
}

export default App;
