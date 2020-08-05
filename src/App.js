import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ExerciseProvider } from './components/ExerciseContext';
import { UserProvider } from './components/UserContext'
import Navbar from './components/Navbar';
import Exercises from './components/Exercises';
import User from './components/User';
import CreateExercise from './components/CreateExercise';
import UpdateExercise from './components/UpdateExercise';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <ExerciseProvider>
          <UserProvider>
            <Navbar />
            <Switch>
              <Route path='/' exact component={Exercises} />
              <Route path='/users' component={User} />
              <Route path='/create-exercise' component={CreateExercise} />
              <Route path='/update-exercise/:id' component={UpdateExercise} />
            </Switch>
          </UserProvider>
        </ExerciseProvider>
      </Router>
    </div>
  );
}

export default App;
