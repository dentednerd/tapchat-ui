import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Snackbar, SnackbarContent, Button } from '@material-ui/core';
import TapCard from './organisms/TapCard';
import Message from './organisms/Message';
import Recipient from './organisms/Recipient';
import Login from './organisms/Login';
import data from './assets/data';

const useStyles = makeStyles({
	snackbar: {
    backgroundColor: "#0a5",
    color: "#fff",
    fontFamily: "OpenDyslexic",
    fontSize: "2rem",
    borderRadius:"0.25rem"
  },
  button: {
    backgroundColor: "#fff",
    color: "#000",
    fontFamily: "OpenDyslexic",
    fontSize: "1rem",
    borderRadius:"0.25rem",
    marginLeft: "1rem"
  }
});

function App() {
  const [user, setUser] = useState(null);
  const [msg, setMsg] = useState([]);
  const [recipient, setRecipient] = useState(null);
  const [sent, setSent] = useState(false);
  const classes = useStyles();

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
    if (recipient === null) {
      return setRecipient(contact);
    }

    return setRecipient(null);
  }

  const sendMessage = () => {
    if (!msg.length) return;
    setSent(true);
  }

  const reset = () => {
    setSent(false);
    setMsg([]);
    setRecipient(null);
  }

  const loginUser = (user) => {
    return setUser(user);
  }

  const logout = () => {
    reset();
    return setUser(null);
  }

  return (
    <main>

      {recipient && (
        <section className="message">
          <Message
            recipient={recipient}
            msg={msg}
            addRemoveRecipient={addRemoveRecipient}
            sendMessage={sendMessage}
          />
        </section>
      )}

      {!user && (
        <Login loginUser={loginUser} />
      )}

      {user && !recipient && (
        <section className="start">
          <Recipient
            action={addRemoveRecipient}
            recipient={recipient}
          />
        </section>
      )}
      
      <section className="board">
        {recipient && (
          <Fragment>
            <Grid container spacing={2}>
              {data.map(phrase => (
                <Grid item xs={6} sm={4} md={3} lg={2} key={phrase.message}>
                  <TapCard
                    icon={phrase.icon}
                    message={phrase.message}
                    active={msg.indexOf(phrase.message) > -1}
                    action={() => addRemovePhrase(phrase.message)}
                  />
                </Grid>
              ))}
            </Grid>
          </Fragment>
        )}
      </section>

      <Snackbar
        className={classes.snackbar}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={sent}
        autoHideDuration={6000}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
      >
        <SnackbarContent
          className={classes.snackbar}
          aria-describedby="client-snackbar"
          message={<span id="message-id">Message sent to {recipient && recipient.name}!</span>}
          action={[
          <Button
            className={classes.button}
            key="reset"
            size="small"
            onClick={reset}
          >
            Start again
          </Button>,
          <Button
            className={classes.button}
            key="logout"
            size="small"
            onClick={logout}
          >
            Log out
          </Button>
        ]}
        >
        </SnackbarContent>
      </Snackbar>

    </main>
  );
}

export default App;
