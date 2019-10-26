import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardMedia, Button, Hidden } from '@material-ui/core';

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
	},
	mobile: {
		margin: "1.5rem 1.5rem 1rem 1.5rem",
		minHeight: "3rem"
	},
	mobrecipient: {
		backgroundColor: "#fff",
		color: "#000",
		fontSize: "2rem",
		lineHeight: "3rem",
		marginRight: "1rem",
		marginBottom: "1.5rem",
		borderRadius: "0.5rem",
		padding: "0 0.25rem"
	},
	mobspan: {
		color: "#fff",
		fontSize: "2rem",
		lineHeight: "3rem",
		marginRight: "1rem",
		marginBottom: "1.5rem",
	}
});

const Message = (props) => {
	const { msg, recipient, addRemoveRecipient, sendMessage } = props;
	const classes = useStyles();

	return (
		<Fragment>
			<Hidden mdDown>
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
					{recipient && <span className={classes.recipient}>{recipient.name.concat(",")}</span>}
					{msg.map(phrase => <span key={phrase} className={classes.message}>{phrase}</span>)}
					<Button
						variant="contained"
						className={classes.button}
						onClick={() => sendMessage()}
					>
						Send
					</Button>
				</div>
			</Hidden>
			<Hidden lgUp>
				<section className={classes.mobile}>
					{recipient && (
						<span
							className={classes.mobrecipient}
							onClick={() => addRemoveRecipient()}
						>
							{recipient.name.concat(",")}
						</span>
					)}
					{msg.map(phrase => <span key={phrase} className={classes.mobspan}>{phrase}</span>)}
					<Button
						variant="contained"
						className={classes.button}
						onClick={() => sendMessage()}
					>
						Send
					</Button>
				</section>
			</Hidden>
		</Fragment>
	)
}

export default Message;
