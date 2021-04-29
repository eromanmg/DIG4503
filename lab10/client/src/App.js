import logo from './logo.svg';
import './App.css';
import NameSearch from "./components/NameSearch";
import ReportingArea from "./components/ReportingArea";
import AgeSearch from "./components/AgeSearch";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
  <Title />
  <AgeSearch />
  <NameSearch />
  <ReportingArea/>
    </div>
  );
}

export default App;
