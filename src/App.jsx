import "./App.css";
import { ListsOfGifs } from "./components/ListsOfGifs";
import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <h1>App</h1>

        <div className="enlaces">
          <Link to="/gif/panda">Gifs de pandas</Link>
          <Link to="/gif/mario">Gifs de Mario</Link>
          <Link to="/gif/rickandmorty">Gifs de Rick and Morty</Link>
        </div>
        <Route component={ListsOfGifs} path="/gif/:keyword" />
      </section>
    </div>
  );
}

export default App;
