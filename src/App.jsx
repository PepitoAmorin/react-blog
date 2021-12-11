import { Navbar } from './Navbar';  
import { Home } from './Home'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { Create } from './Create';
import { PostDetails } from './PostDetails';
import { FourOhFour } from './404';

function App() {
  return (
    <Router>
      <div className="App"> 
        <Navbar />
        <div className="content"> 
          <Switch>
            <Route exact path='/react-blog/'>
              <Home /> 
            </Route> 
            <Route exact path='/react-blog/create'>
              <Create /> 
            </Route>
            <Route exact path='/react-blog/post/:id'>
              <PostDetails /> 
            </Route>
            <Route exact path='/react-blog/'>
              <Home /> 
            </Route>
            <Route path='react-blog/*'>
              <FourOhFour />
            </Route>
          </Switch> 
        </div>
    </div>
    </Router>
  );
}

export { App };
