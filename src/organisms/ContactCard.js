import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
		height: "16rem",
		textAlign: "center",
		backgroundColor: "white",
		backgroundColor: "#B3EFFF"
	},
	clickable: {
		height: "16rem"
	},
	image: {
		height: "10rem"
	},
	text: {
		fontSize: "2rem",
		fontFamily: "OpenDyslexic",
		lineHeight: "2rem"
	}
});

const ContactCard = (props) => {
	const { contact, action } = props;
	const { name, avatar } = contact;
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardActionArea
				className={classes.clickable}
				onClick={() => action(contact)}
      >
				<CardMedia
					className={classes.image}
					component="img"
					image={avatar}
					title={name}
				/>
				<p className={classes.text}>{name}</p>
			</CardActionArea>
		</Card>
	)
}

export default ContactCard;
