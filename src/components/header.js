import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness2Outlined";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
  header: {
    padding: "16px 0px",
    boxShadow: "0px 0px 5px 5px #8080801c",
    [theme.breakpoints.down("xs")]: {
      "& h1": {
        fontSize: 18,
      },
    },
    "& button": {
      cursor: "pointer",
    },
  },
}));

const Header = ({ darkMode, handleTheme }) => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" component="h1">
            <Box fontWeight="fontWeightBold">Where in the world?</Box>
          </Typography>
          <Button
            onClick={handleTheme}
            variant="text"
            startIcon={darkMode ? <WbSunnyIcon /> : <Brightness2OutlinedIcon />}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
