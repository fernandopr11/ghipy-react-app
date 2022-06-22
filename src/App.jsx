import "./App.css";
import { Link, Route } from "wouter";
import { SearchResults } from './pages/SearchResults';
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import Logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <Link to="/">
          <h4 className="title">Giphy App</h4>
        </Link>

        <Route component={Home} path="/" />
        <Route component={SearchResults} path="/search/:keyword" />
        <Route component={Detail} path="/gif/:id" />
      </section>
    </div>
  );
}

export default App;
