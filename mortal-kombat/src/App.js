import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import axios from 'axios'
import Battle from './pages/Battle';
import ChooseHero from './pages/ChooseHero';

class App extends React.Component {

  state = {
    heroes: [],
    currentHero: null
  }

  componentDidMount() {
    axios.get('http://localhost:3003/get-heroes')
      .then(res => {
        const heroes = res.data;
        this.setState({heroes});
      });
  }

  updateData = (value) => {
    this.setState({ currentHero: value })
 }

  render() {
    console.log('this.state ',this.state.heroes);
    return (
      <div className='wrapper'>
        <Router>
          <Switch>
            <Route path='/battle'
                   render={ props => <Battle currHero={this.state.heroes[this.state.currentHero]} 
                                             opponent={this.state.heroes[Math.floor(Math.random() * (this.state.heroes.length - 1) + 1)]} />} />
            <Route path='/choosehero' 
                   render={props => <ChooseHero heroesList={this.state.heroes} 
                                                updateData={this.updateData}/>} />
            <Redirect from='/' to='/choosehero' />
          </Switch>
        </Router>  
      </div>
    );
  }
}

export default App;
