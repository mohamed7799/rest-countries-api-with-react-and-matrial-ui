import { makeStyles } from "@material-ui/core";
import Form from "./form";
import Countries from "./countries/countries";
import { useContext } from "react";

import { MainData } from "../App";
const useStyle = makeStyles(() => ({
  main: {
    //backgroundColor: "hsl(0, 0%, 98%)",
  },
}));

const Main = () => {
  const { filterdCountries } = useContext(MainData);

  const classes = useStyle();
  return (
    <section className={classes.main}>
      <Form></Form>
      <Countries filterdCountries={filterdCountries}></Countries>
    </section>
  );
};

export default Main;
