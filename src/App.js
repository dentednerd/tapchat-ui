import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TapCard from './organisms/TapCard';
import Message from './organisms/Message';

function App() {
  const [msg, setMsg] = useState([]);

  const addRemovePhrase = (phrase) => {
    const index = msg.indexOf(phrase);
    if (index === -1) {
      return setMsg([...msg, phrase]);
    }
    const newMsg = (msg) => {
      msg.splice(index, 1);
      return msg;
    };

    return setMsg([...newMsg(msg)]);
  }

  return (
    <div>
      
      <h1>Tapchat</h1>

      <Message msg={msg} />

      <Grid container spacing={2}>

        <Grid item xs={3}>
          <TapCard
            icon="💕"
            message="I love you"
            action={() => addRemovePhrase("I love you")}
          />
        </Grid>

        <Grid item xs={3}>
          <TapCard
            icon="😄"
            message="I'm so happy"
            action={() => addRemovePhrase("I'm so happy")}
          />
        </Grid>

        <Grid item xs={3}>
          <TapCard
            icon="🤫"
            message="Quiet please"
            action={() => addRemovePhrase("Quiet please")}
          />
        </Grid>

        <Grid item xs={3}>
          <TapCard
            icon="🤢"
            message="I feel sick"
            action={() => addRemovePhrase("I feel sick")}
          />
        </Grid>
      
      </Grid>

    </div>
  );
}

export default App;
