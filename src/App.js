import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TabComp from "./components/TabComp";
import Footer from "./components/Footer";
import LoginComp from "./components/LoginComp";

function App() {
  return (
    <div className="App">
      <header className="titlePosition">
        <h1 className="title">The Elder Scrolls V SKYRIM</h1>
        <LoginComp />
      </header>
      <nav>
        <TabComp />
      </nav>
      <Footer />
    </div>
  );
}

export default App;
