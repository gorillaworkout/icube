import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
  );
}

export default App;
