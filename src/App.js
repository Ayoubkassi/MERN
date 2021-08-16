import './App.css';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import HomePage from './pages/home';
import BrowsePage from './pages/browse';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import { IsUserRedirect , ProtectedRoute } from './helpers/routes';
import  useAuthListener  from './hooks/use-auth-listener';



function App() {
  const { user } = useAuthListener();
  console.log(user);
  return (
    <Router>
      <Switch>
         <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
           <SignIn />
         </IsUserRedirect>
         <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
           <SignUp />
         </IsUserRedirect>
         <ProtectedRoute user={user} path={ROUTES.BROWSE}>
           <BrowsePage />
         </ProtectedRoute>
         <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
           <HomePage />
         </IsUserRedirect>
       </Switch>
    </Router>
  );
}

export default App;
