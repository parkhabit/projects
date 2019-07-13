import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import Contact from './containers/contact';
import About from './containers/about';
import Work from './containers/work';
import Home from './containers/home';
import ScrollToTop from './components/scroll';
import ProjectDetails from './components/project-details';

ReactDOM.render((
  <Router>
    <ScrollToTop>
      <Route exact path='/' component={Home} />
      <Route path='/contact' component={Contact} />
      <Route path='/about' component={About} />
      <Route path='/work' component={Work} />
      <Route path='/first-project' component={ProjectDetails} />
      <Route path='/second-project' component={ProjectDetails} />
      <Route path='/third-project' component={ProjectDetails} />
    </ScrollToTop>
  </Router>
), document.getElementById('root'));
