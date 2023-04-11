import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";

  import Main from "./components/Main"
  import Game from "./components/Game"
  import Login from "./components/Login"

  function App() {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/game" element={<Game />} />
            </Routes>
        </Router>
        </>
    );
  }

  export default App;