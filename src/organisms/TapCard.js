import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Emoji from 'a11y-react-emoji'

const useStyles = makeStyles({
  card: {
		height: '8rem',
		padding: '1rem',
		textAlign: 'center',
		backgroundColor: 'white'
	},
	active: {
		textAlign: 'center',
		backgroundColor: "powderblue"
	},
	clickable: {
		height: "8rem",
		textAlign: "center"
	},
	emoji: {
		fontSize: '4rem',
		height: '4rem',
		margin: 0,
		padding: 0
	},
	message: {
		fontFamily: "OpenDyslexic",
		fontSize: "1rem",
		height: "1rem",
		margin: 0,
		padding: 0
	}
});

const TapCard = (props) => {
	const { icon, message, action, active } = props;
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
				<Emoji className={classes.emoji} symbol={icon} label={message} />
				<p className={classes.message}>{message}</p>
			</CardActionArea>
		</Card>
	)
};

export default TapCard;
