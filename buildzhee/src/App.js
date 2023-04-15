import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";

  import Main from "./components/Main"
  import Game from "./components/Game"
  import Login from "./components/Login"
  import Weapons from "./components/Weapons"
  import Armor from "./components/Armor"

  function App() {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/game" element={<Game />} />
                <Route path="/weapons" element={<Weapons />} />
                <Route path="/armor" element={<Armor />} />
            </Routes>
        </Router>
        </>
    );
  }

  export default App;