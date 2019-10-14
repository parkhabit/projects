import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './containers/home';
import ScrollToTop from './components/scroll';
import Project from './containers/project';
import Article from './containers/article';

ReactDOM.render((
  <Router>
    <ScrollToTop>
      <Route exact path='/' component={Home} />
      <Route path='/project/:projectName' component={Project} />
      <Route path='/article/:id' exact component={Article} />
    </ScrollToTop>
  </Router>
), document.getElementById('root'));
