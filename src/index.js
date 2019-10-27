import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './containers/home';
import ScrollToTop from './components/scroll';
import ProjectOne from './containers/project-1';
import ProjectTwo from './containers/project-2';
import ProjectThree from './containers/project-3';
import Article from './containers/article';

ReactDOM.render((
  <Router>
    <ScrollToTop>
      <Route exact path='/' component={Home} />
      <Route path='/project/1' component={ProjectOne} />
      <Route path='/project/2' component={ProjectTwo} />
      <Route path='/project/3' component={ProjectThree} />
      <Route path='/article/:id' exact component={Article} />
    </ScrollToTop>
  </Router>
), document.getElementById('root'));
