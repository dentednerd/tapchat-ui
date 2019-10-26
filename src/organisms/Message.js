import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
	viewer: {
		padding: "2rem",
		width: "calc(100% - 4rem)",
		borderRadius: "1rem",
		backgroundColor: "#eee",
		marginBottom: "2rem",
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "flex-end",
		alignItems: "center",
		height: "4rem",
		maxHeight: "4rem"
	},
	message: {
		height: "2rem",
		borderRadius: "0.5rem",
		padding: "0.25rem 0.5rem",
		marginRight: "2rem",
		backgroundColor: "#ccc"
	},
  button: {
		fontFamily: "OpenDyslexic",
		height: "2rem"
	}
});

const Message = (props) => {
	const { msg } = props;
	const classes = useStyles();

	return (
		<div className={classes.viewer}>
			{msg.map(phrase => <span key={phrase} className={classes.message}>{phrase}</span>)}
			<Button variant="contained" className={classes.button}>
        Send
      </Button>
		</div>
	)
}

export default Message;
