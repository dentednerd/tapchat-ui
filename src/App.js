import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TapCard from './organisms/TapCard';
import Message from './organisms/Message';
import Recipient from './organisms/Recipient';
import data from './assets/data';

function App() {
  const [msg, setMsg] = useState([]);
  const [recipient, setRecipient] = useState(null);

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

  const addRemoveRecipient = (contact) => {
    if (!recipient) {
      return setRecipient(contact);
    }

    return setRecipient(null);
  }

  return (
    <div>
      
      <h1>Tapchat</h1>

      <Recipient action={addRemoveRecipient} />

      <Message recipient={recipient} msg={msg} />

      <Grid container spacing={2}>

        {data.map(phrase => (
          <Grid item xs={3}>
            <TapCard
              icon={phrase.icon}
              message={phrase.message}
              action={() => addRemovePhrase(phrase.message)}
            />
          </Grid>
        ))}
      
      </Grid>

    </div>
  );
}

export default App;
