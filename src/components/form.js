import TextField from "@material-ui/core/TextField";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { useContext } from "react";

import { MainData } from "../App";
const useStyles = makeStyles((theme) => ({
  form: {
    margin: "3.5rem 0px",
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
    "& > *": { boxShadow: "0px 0px 5px 3px #8080801c" },
  },
  noBorder: {
    border: "none",
  },
  search: {
    width: "40%",
  },
  formControl: {
    width: "20%",
    minWidth: 120,
  },
  [theme.breakpoints.down("xs")]: {
    form: {
      flexDirection: "column",
    },
    search: {
      width: "100%",
    },
    formControl: {
      width: "50%",
    },
  },
}));

const Form = () => {
  const classes = useStyles();
  const {
    regions,
    currentRegion,
    handleRegion,
    handleName,
    searchedCountries,
  } = useContext(MainData);
  return (
    <Container>
      <form className={classes.form} action="">
        <TextField
          value={searchedCountries}
          onChange={handleName}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
          className={classes.search}
          placeholder="Search for a country"
          variant="outlined"
        ></TextField>
        <FormControl className={classes.formControl}>
          <Select
            value={currentRegion}
            variant="outlined"
            onChange={handleRegion}
          >
            {regions.map((region) => (
              <MenuItem key={region} value={region}>
                {region}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
    </Container>
  );
};

export default Form;
