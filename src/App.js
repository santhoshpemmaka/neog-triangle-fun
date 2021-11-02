import './App.css';
import Triangle from './Triangle';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Quiz from './Quiz';
import Hypotenuse from './Hypotenuse';
import Area from './Area';


function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/quiz'>
            <Header/>
            <Quiz/>
          </Route>
          <Route path='/area'>
            <Header/>
            <Area/>
          </Route>
          <Route path="/hypotensue">
            <Header/>
            <Hypotenuse/>
          </Route>
          <Route path='/'>
            <Header/>
            <Triangle />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
