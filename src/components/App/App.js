import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const Loading = () => {
  return <p>Loading...</p>
}

export default function App() {
  return (
    <Suspense fallback={<Loading />} >
      <Router>
        <Switch>
          <Route exact path="/">
            Insert Your component
          </Route>
          <Route path="/Home">
            Insert second component 
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}