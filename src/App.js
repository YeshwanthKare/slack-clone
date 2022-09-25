import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  // BEM naming convention
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
      {/* React-Router -> Chat Screen */}
    </div>
  );
}

export default App;
