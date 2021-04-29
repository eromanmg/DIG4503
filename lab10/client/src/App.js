import logo from './logo.svg';
import './App.css';
import NameSearch from "./components/NameSearch";
import ReportingArea from "./components/ReportingArea";
import AgeSearch from "./components/AgeSearch";
import Title from "./components/Title";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
  <Title />
  <AgeSearch />
  <NameSearch />
  <ReportingArea/>
  <Footer />
    </div>
  );
}

export default App;
