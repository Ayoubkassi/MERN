import './App.css';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import HomePage from './pages/home';
import BrowsePage from './pages/browse';
import SignIn from './pages/signin';
import SignUp from './pages/signup';



function App() {
  return (
    <Router>
      <Route exact  path={ROUTES.HOME} component={HomePage} />
      <Route exact  path={ROUTES.BROWSE} component={BrowsePage} />
      <Route exact  path={ROUTES.SIGN_IN} component={SignIn} />
      <Route exact  path={ROUTES.SIGN_UP} component={SignUp} />
    </Router>
  );
}

export default App;
