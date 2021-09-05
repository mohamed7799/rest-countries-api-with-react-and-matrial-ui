import { Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  a: {
    textDecoration: "none",
  },
  media: {
    height: 150,
  },
  item: {
    paddingTop: "0px",
    paddingBottom: "0px",
  },
  inline: {
    display: "inline",
  },
});
const Country = ({ country }) => {
  const classes = useStyles();
  return (
    <Link className={classes.a} to={`/detailes/${country.name}`}>
      <Card>
        <CardMedia className={classes.media} image={country.flag}></CardMedia>
        <CardHeader title={country.name}></CardHeader>

        <List component="nav" aria-label="secondary mailbox folders">
          <ListItem className={classes.item}>
            <ListItemText
              primary={
                <Typography
                  component="span"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Population:
                </Typography>
              }
              secondary={
                <Typography
                  component="span"
                  className={classes.inline}
                  color="textSecondary"
                >
                  {` ${country.population}`}
                </Typography>
              }
            />
          </ListItem>
          <ListItem className={classes.item}>
            <ListItemText
              primary={
                <Typography
                  component="span"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Region:
                </Typography>
              }
              secondary={
                <Typography
                  component="span"
                  className={classes.inline}
                  color="textSecondary"
                >
                  {` ${country.region}`}
                </Typography>
              }
            />
          </ListItem>
          <ListItem className={classes.item}>
            <ListItemText
              primary={
                <Typography
                  component="span"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Capital:
                </Typography>
              }
              secondary={
                <Typography
                  component="span"
                  className={classes.inline}
                  color="textSecondary"
                >
                  {` ${country.capital}`}
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Card>
    </Link>
  );
};

export default Country;
