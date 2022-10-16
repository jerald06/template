import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import { useState } from "react";
import { createTheme, Paper, Switch, ThemeProvider } from "@mui/material";

function App ()
{
  const [ mode, setMode ] = useState( false )
  const theme = createTheme( {
    palette: {
      mode: mode ? "dark" : "light"
    }
  } )
  return (
    <>
      <ThemeProvider theme={ theme }>
        <Paper /*sx={ { height: "100vh" } }*/ variant="outlined" square>
          <Navbar />
          <Switch onClick={ () => setMode( !mode ) }></Switch>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/details" element={ <Details /> } />
            </Routes>
          </BrowserRouter>

          <Footer />
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;
