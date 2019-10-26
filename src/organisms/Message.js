import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardMedia, Button } from '@material-ui/core';

const useStyles = makeStyles({
	viewer: {
		padding: "2rem 2rem 1rem",
		width: "calc(100% - 8rem)",
		borderRadius: "0.25rem",
		backgroundColor: "#B3EFFF",
		margin: "2rem",
		display: "flex",
		flexFlow: "row wrap",
		justifyContent: "flex-end",
		alignItems: "center",
		minHeight: "5rem"
	},
	recipient: {
		height: "2rem",
		fontSize: "2rem",
		lineHeight: "2rem",
		borderRadius: "0.5rem",
		padding: "0.5rem",
		marginRight: "2rem",
		marginBottom: "1rem",
		backgroundColor: "#fff"
	},
	message: {
		height: "2rem",
		fontSize: "2rem",
		lineHeight: "2rem",
		borderRadius: "0.5rem",
		padding: "0.5rem",
		marginRight: "2rem",
		marginBottom: "1rem",
		backgroundColor: "#fff",
	},
  button: {
		height: "3rem",
		fontSize: "2rem",
		lineHeight: "2rem",
		borderRadius: "0.5rem",
		padding: "0.5rem",
		backgroundColor: "#1C304A",
		color: "#fff",
		fontFamily: "OpenDyslexic",
		marginBottom: "1rem"
	},
	card: {
		textAlign: "center",
		width: "10rem",
		marginTop: "2rem",
		marginLeft: "2rem",
		height: "8rem"
	},
	cardImage: {
		height: "5rem"
	},
	cardText: {
		fontFamily: "OpenDyslexic",
		fontSize: "1.5rem",
		lineHeight: "3rem"
	}
});

const Message = (props) => {
	const { msg, recipient, addRemoveRecipient } = props;
	const classes = useStyles();

	return (
		<Fragment>
			<div>
				{recipient && (
					<Card className={classes.card}>
						<CardActionArea
							onClick={() => addRemoveRecipient()}
							className={classes.cardText}
						>
							<CardMedia
								className={classes.cardImage}
								component="img"
								image={recipient.avatar}
								title={recipient.name}
							/>
							{recipient.name}
						</CardActionArea>
					</Card>
				)}
			</div>
			<div className={classes.viewer}>
				{recipient && <span className={classes.recipient}>{recipient.name.concat(", ")}</span>}
				{msg.map(phrase => <span key={phrase} className={classes.message}>{phrase}</span>)}
				<Button
					variant="contained"
					className={classes.button}
				>
					Send
				</Button>
			</div>
		</Fragment>
	)
}

export default Message;
