import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/navigation';
import HomePage from './customer/pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navigation />
    <div>
      <HomePage />
    </div>
    </div>
  );
}

export default App;
