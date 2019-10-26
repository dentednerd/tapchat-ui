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
    if (contact !== recipient) {
      return setRecipient(contact);
    }

    return setRecipient(null);
  }

  return (
    <main>

      <section className="message">
        <Message
          recipient={recipient}
          msg={msg}
        />
      </section>
      
      <section className="board">
        <Recipient
          action={addRemoveRecipient}
          recipient={recipient}
        />

        {recipient && <h2>What would you like to tell {recipient}?</h2>}

        <Grid container spacing={2}>

          {data.map(phrase => (
            <Grid item xs={3} key={phrase.message}>
              <TapCard
                icon={phrase.icon}
                message={phrase.message}
                active={msg.indexOf(phrase.message) > -1}
                action={() => addRemovePhrase(phrase.message)}
              />
            </Grid>
          ))}
        
        </Grid>
      </section>

    </main>
  );
}

export default App;
