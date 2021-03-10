import './App.css';
import Homepage from './Homepage/Homepage'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    {/* As soon as I start the project I design the routing system even though 
    I'll start with the first page for now  */}
      <Switch>
        <Route exact path = "/" component = {Homepage}/>
      </Switch>
    </div>
  );
}

export default App;
