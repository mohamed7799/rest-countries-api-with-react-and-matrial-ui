//import { Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Button } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useEffect, useState } from "react";
const useStyle = makeStyles((theme) => ({
  container: {
    marginTop: "3rem",
  },
  a: {
    textDecoration: "none",
  },
  root: {
    marginTop: "3rem",
    gap: "5rem",
  },
  img: {
    maxHeight: 350,
    width: "100%",
  },
  list: {
    listStyle: "none",
    columns: 2,
  },
  item: {
    padding: 0,
  },
  inline: {
    display: "inline",
  },
}));

const CountryDetailes = () => {
  const { name } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((res) => {
        if (!res.ok) {
          throw Error("there was an error");
        }
        return res.json();
      })
      .then((body) => {
        setData(body);
      });
  }, []);

  const classes = useStyle();

  return (
    <Container className={classes.container}>
      <Link
        className={classes.a}
        to="/rest-countries-api-with-react-and-matrial-ui"
      >
        <Button variant="outlined" startIcon={<ArrowBackIcon />}>
          Back
        </Button>
      </Link>
      {data && (
        <Grid className={classes.root} container alignItems="center">
          <Grid item sm={5}>
            <img className={classes.img} srcSet={data[0].flag} alt="" />
          </Grid>
          <Grid item sm={5}>
            <div>
              <Typography variant="h5" component="h1">
                <Box fontWeight="fontWeightBold">{data[0].name}</Box>
              </Typography>
              <Grid container>
                <Grid item sm={6} xs={12}>
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
                            {` ${data[0].population}`}
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
                            {` ${data[0].region}`}
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
                            {` ${data[0].capital}`}
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
                            nativeName:
                          </Typography>
                        }
                        secondary={
                          <Typography
                            component="span"
                            className={classes.inline}
                            color="textSecondary"
                          >
                            {` ${data[0].nativeName}`}
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
                            subregion:
                          </Typography>
                        }
                        secondary={
                          <Typography
                            component="span"
                            className={classes.inline}
                            color="textSecondary"
                          >
                            {` ${data[0].subregion}`}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <List component="nav" aria-label="secondary mailbox folders">
                    <ListItem className={classes.item}>
                      <ListItemText
                        primary={
                          <Typography
                            component="span"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            currencies:
                          </Typography>
                        }
                        secondary={
                          <Typography
                            component="span"
                            className={classes.inline}
                            color="textSecondary"
                          >
                            {` ${data[0].currencies[0].name}`}
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
                            languages:
                          </Typography>
                        }
                        secondary={
                          <Typography
                            component="span"
                            className={classes.inline}
                            color="textSecondary"
                          >
                            {` ${data[0].languages
                              .map(function (elem) {
                                return elem.name;
                              })
                              .join(",")}`}
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
                            topLevelDomain:
                          </Typography>
                        }
                        secondary={
                          <Typography
                            component="span"
                            className={classes.inline}
                            color="textSecondary"
                          >
                            {` ${data[0].topLevelDomain[0]}`}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default CountryDetailes;
