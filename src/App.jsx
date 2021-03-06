import { Navbar } from './Navbar';  
import { Home } from './Home'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { Create } from './Create';
import { PostDetails } from './PostDetails';
import { FourOhFour } from './404';

function App() {
  return (
    <Router basename='/react-blog'>
      <div className="App"> 
        <Navbar />
        <div className="content"> 
          <Switch>
            <Route exact path='/'>
              <Home /> 
            </Route> 
            <Route exact path='/create'>
              <Create /> 
            </Route>
            <Route exact path='/post/:id'>
              <PostDetails /> 
            </Route>
            <Route exact path='/'>
              <Home /> 
            </Route>
            <Route path='*'>
              <FourOhFour />
            </Route>
          </Switch> 
        </div>
    </div>
    </Router>
  );
}

export { App };
