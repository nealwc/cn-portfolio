import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from "./pages/About";
import Projects from "./pages/Projects";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer"

function App() {
    return (
        <Router>
            <>
                <Navigation />
                <Switch>
                    <Route exact path={["/home", "/about"]} component={About} />
                    <Route exact path="/projects" component={Projects} />
                </Switch>
                <Footer />
            </>
        </Router>
    )

}

export default App;