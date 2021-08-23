import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ContactPage from './pages/ContactPage/ContactPage';
import HomePage from './pages/HomePage/HomePage';
// page to show all departments
import EventsPage from './pages/EventsPage/EventsPage';
// page to show all events in one department
import Events from './pages/Events/Events';
// page to show one event
import EventMainPage from './pages/EventMainPage/EventMainPage';
import Sponsor from './pages/SponsorePage/Sponsore';
import OurTeam from './pages/OurTeam/OurTeam';
import About from './pages/About/About';
import LiveDesk from './pages/LiveDesk/LiveDesk';
import Sections from './pages/Sections/Sections';
import GlimpsePage from './pages/GlimpsePage/GlimpsePage';

function App() {
  

  // function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          {/* about */}
          <Route path="/about" exact>
            <About />
          </Route>

          <Route path="/glimpse" exact>
            <GlimpsePage />
          </Route>

          {/* contact */}
          <Route path="/contact" exact>
            <ContactPage></ContactPage>
          </Route>

          <Route path="/sponsor" exact>
            <div>
              <Sponsor />
            </div>
          </Route>

          <Route path="/team" exact>
            <OurTeam />
          </Route>

          {/* Events Page */}
          <Route path="/events" exact>
            <EventsPage />
          </Route>

          <Route path="/departments/:department" exact>
            <Events />
          </Route>

          <Route path="/sections/:section" exact>
            <Sections />
          </Route>

          <Route path="/events/:event" exact>
            <EventMainPage />
          </Route>

          <Route path="/liveDesk" exact>
            <LiveDesk />
          </Route>
          {/* Homepage */}
          <Route path="/">
            <HomePage></HomePage>
          </Route>
        </Switch>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
