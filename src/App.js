import './App.css';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import HomePage from './pages/home';
import BrowsePage from './pages/browse';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import { IsUserRedirect , ProtectedRoute } from './helpers/routes';



function App() {
  const user = {};
  return (
    <Router>
      <Route>
        <IsUserRedirect user={user}
                        loggedInPath={ROUTES.BROWSE}
                        path={ROUTES.SIGN_IN}
                        exact
        />
      </Route>
      <Route>
        <IsUserRedirect user={user}
                        loggedInPath={ROUTES.BROWSE}
                        path={ROUTES.SIGN_UP}
                        exact
        />
      </Route>
      <ProtectedRoute user={user} path={ROUTES.BROWSE}exact>
        <BrowsePage />
      </ProtectedRoute>
      <Route>
      <IsUserRedirect user={user}
                        loggedInPath={ROUTES.BROWSE}
                        path={ROUTES.HOME}
                        exact
        />
      </Route>

    </Router>
  );
}

export default App;
