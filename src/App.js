import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => (
    <div className="ui container">
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
    </div>
);
export default App;
