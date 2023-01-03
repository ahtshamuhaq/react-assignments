
import './App.css';
import Counter from './components/Counter';
import Dark from './components/Dark';
import FORMATTER from './components/FORMATTER';
import Guessnumber from './components/Guessnumber';
import Password from './components/Password';

function App() {
  return (
    <div className="App">
      <Counter/>
      <Guessnumber/>
     <FORMATTER/>
      <Dark/>
      <Password/>
    </div>
  );
}

export default App;
