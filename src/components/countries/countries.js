import Grid from "@material-ui/core/Grid";
import Country from "./country";
import { Container } from "@material-ui/core";
const Countries = ({ filterdCountries }) => {
  return (
    <Container>
      <Grid container spacing={4}>
        {filterdCountries.map((item, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <Country country={item}></Country>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Countries;
