import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Input, Button } from '@material-ui/core';

const useStyles = makeStyles({
	login: {
    textAlign: "center"
	},
	input: {
		fontFamily: "OpenDyslexic",
		fontSize: "2rem",
		width: "6rem",
		backgroundColor: "#b3efff",
		borderRadius: "0.25rem"
	},
  button: {
		height: "3rem",
		fontSize: "2rem",
		lineHeight: "2rem",
		borderRadius: "0.5rem",
		padding: "0.5rem",
		backgroundColor: "#0a5",
		color: "#fff",
		fontFamily: "OpenDyslexic",
		margin: "1rem 0"
	}
});

const Login = (props) => {
	const { loginUser } = props;
	const classes = useStyles();

	return (
		<section className={classes.login}>
			<h1>Tapchat</h1>
			<h2>Please enter your pin:</h2>
			<FormControl>
				<Input
					className={classes.input}
					name="pin"
				/>
				<Button
					className={classes.button}
					onClick={() => loginUser("1234")}
				>
					Go
				</Button>
			</FormControl>
		</section>
	)
}

export default Login;
