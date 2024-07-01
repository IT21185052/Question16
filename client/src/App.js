import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import UserList from '../components/UserList';
import CreateUser from '../components/CreateUser';
import EditUser from '../components/EditUser';

const App = () => {
  return (
    <Router>
      <div className="container">
        <h2>MERN Stack CRUD Application</h2>
        <Route path="/" exact component={UserList} />
        <Route path="/create" component={CreateUser} />
        <Route path="/edit/:id" component={EditUser} />
      </div>
    </Router>
  );
}

export default App;
