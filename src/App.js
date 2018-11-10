import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

const App = () => (
    <div>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
    </div>
);
export default App;
