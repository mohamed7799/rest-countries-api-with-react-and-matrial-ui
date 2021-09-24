import Form from "./form";
import Countries from "./countries/countries";
import { useContext } from "react";

import { MainData } from "../App";

const Main = () => {
  const { filterdCountries } = useContext(MainData);

  return (
    <section>
      <Form></Form>
      <Countries filterdCountries={filterdCountries}></Countries>
    </section>
  );
};

export default Main;
