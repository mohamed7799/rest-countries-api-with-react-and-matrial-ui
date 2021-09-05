import Header from "./components/header";
import Main from "./components/main";
import CountryDetailes from "./components/countryDetailes";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const MainData = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [countries, setCountries] = useState(null);
  const [filterdCountries, setFilterdCountries] = useState(null);
  const [searchedCountries, setSearchedCountries] = useState("");
  const [currentRegion, setcurrentRegion] = useState("All");
  const [regions] = useState([
    "All",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ]);

  const handleRegionChange = (e) => {
    setcurrentRegion(e.target.value);
    setSearchedCountries("");
    let arrTemp = countries.filter((item) => {
      return item.region === e.target.value;
    });

    if (e.target.value === "All") {
      setFilterdCountries(countries);
    } else {
      setFilterdCountries(arrTemp);
    }
  };

  const handleNameChange = (e) => {
    setSearchedCountries(e.target.value);
    let arrTemp = countries.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    if (e.target.value === "") {
      setFilterdCountries(countries);
    } else {
      setFilterdCountries(arrTemp);
    }
  };

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        if (!res.ok) {
          throw Error("there was an error");
        }
        return res.json();
      })
      .then((body) => {
        setCountries(body.slice(0, 100));
        setFilterdCountries(body.slice(0, 100));
      });
  }, []);

  const handleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Router>
          <div className="App" style={{ minHeight: "100vh" }}>
            <Header darkMode={darkMode} handleTheme={handleTheme}></Header>

            {countries && filterdCountries && (
              <Switch>
                <Route
                  exact
                  path="/rest-countries-api-with-react-and-matrial-ui"
                >
                  <MainData.Provider
                    value={{
                      searchedCountries: searchedCountries,
                      filterdCountries: filterdCountries,
                      currentRegion: currentRegion,
                      regions: regions,
                      handleRegion: handleRegionChange,
                      handleName: handleNameChange,
                    }}
                  >
                    <Main></Main>
                  </MainData.Provider>
                </Route>

                <Route path="/detailes/:name">
                  <CountryDetailes></CountryDetailes>
                </Route>
              </Switch>
            )}
          </div>
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
