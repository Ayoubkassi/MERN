import './App.css';
import Jumbotron from './components/jumbotron/jumbotron.component';
import jumboData from './fixtures/jumbo';
import JumbotronContainer from './containers/jumbotron';

function App() {
  return (
    <div className="App">
        <JumbotronContainer />
    </div>
  );
}

export default App;
