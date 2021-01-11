import React from 'react';
import './App.css';
import Nav from './Nav/Nav';
import HomeScreen from './HomeScreen/HomeScreen';
import CommentScreen from './CommentsScreen/CommentScreen';
import Form from './Form/Form';
import VisitsViews from './VisitsViews/VisitsViews';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path='/' exact component={HomeScreen}/>
          <Route path='/comments' component={CommentScreen}/>
          <Route path='/form' component={Form}/>
          <Route path='/visits' component={VisitsViews}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
