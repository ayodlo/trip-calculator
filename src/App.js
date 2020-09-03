//Dependencies
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import './components/Fontawesomeicons/Fontawesomeicons';

// Components
import Title from './components/Title/Title';
import Navigation from './components/Navigation/Navigation';
import Participants from './components/Participants/Participants';
import PurchasesContainer from './components/Purchases/PurchasesContainer';
import Owes from './components/Owes/Owes';


class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className='container-main'>
            <Route className='navigation' path='/' component={Navigation} />
            <Route path='/' exact render={(props) =>
              <Title />}
            />
            <Route path='/title' exact render={(props) =>
              <Title />}
            />
            <Route path='/participants' exact render={(props) =>
              <Participants />}
            />
            <Route path='/purchases' exact render={(props) =>
              <PurchasesContainer />}
            />
            <Route path='/owes' exact render={(props) =>
              <Owes />}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
