import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import DataState from './context/DataState';
import Datafill from './components/Datafill';
function App() {
  
  return (
    <div className="App">
      <DataState>
      <Navbar />
      <Datafill />
      
      </DataState>
    </div>
  );
}

export default App;
