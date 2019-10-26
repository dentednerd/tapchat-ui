import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardMedia } from '@material-ui/core';
import Emoji from 'a11y-react-emoji'

const useStyles = makeStyles({
  card: {
		height: "20rem",
		padding: "1rem",
		textAlign: "center",
		backgroundColor: "white"
	},
	active: {
		backgroundColor: "#B3EFFF"
	},
	clickable: {
		height: "20rem",
		textAlign: "center"
	},
	emoji: {
		fontSize: "4rem",
		height: "4rem"
	},
	message: {
		fontFamily: "OpenDyslexic",
		fontSize: "1rem",
		height: "1rem",
		margin: 0,
		padding: 0
	},
	avatar: {
		height: "10rem"
	}
});

const TapCard = (props) => {
	const { icon, message, avatar, action, active } = props;
	const classes = useStyles();

	return (
		<Card
			raised={!active}
			className={classes.card, active && classes.active}
		>
			<CardActionArea
				onClick={() => action()}
				className={classes.clickable}
      >
				{avatar && (
					<CardMedia
						className={classes.avatar}
						component="img"
						image={avatar}
						title={message}
					/>
				)}
				<Emoji className={classes.emoji} symbol={icon} label={message} />
				<p className={classes.message}>{message}</p>
			</CardActionArea>
		</Card>
	)
};

export default TapCard;
