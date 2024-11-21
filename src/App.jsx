import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Preco } from "./pages/Preco";
import { AppLayout } from "./layout";
import { Consulta } from "./pages/Consulta";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/precos" element={<Preco />} />
          <Route path="/consulta" element={<Consulta />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
