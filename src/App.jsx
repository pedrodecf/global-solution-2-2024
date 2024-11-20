import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Preco } from "./pages/Preco";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/precos" element={<Preco />} />
      </Routes>
    </Router>
  );
}

export default App;
