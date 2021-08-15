import './App.css';
import Jumbotron from './components/jumbotron/jumbotron.component';
import jumboData from './fixtures/jumbo';
import JumbotronContainer from './containers/jumbotron';
import FooterContainer from './containers/footer';
import FaqsContainer from './containers/faqs';

function App() {
  return (
    <div className="App">
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
    </div>
  );
}

export default App;
