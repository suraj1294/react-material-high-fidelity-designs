import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import theme from "./ui/theme";
import Header from "./ui/header";
import Footer from "./ui/footer";
import LandingPage from "./screens/LandingPage";
import Services from "./screens/Services";
import CustomSoftware from "./screens/CustomSoftware";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <LandingPage />} />
          <Route exact path="/services" component={() => <Services />} />
          <Route
            exact
            path="/services/customSoftware"
            component={() => <CustomSoftware />}
          />
          <Route
            exact
            path="/services/mobileApps"
            component={() => <div>mobile Apps</div>}
          />
          <Route
            exact
            path="/services/websites"
            component={() => <div>websites</div>}
          />
          <Route
            exact
            path="/revolution"
            component={() => <div>revolution</div>}
          />
          <Route exact path="/about" component={() => <div>about</div>} />
          <Route exact path="/contact" component={() => <div>contact</div>} />
          <Route exact path="/estimate" component={() => <div>estimate</div>} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
