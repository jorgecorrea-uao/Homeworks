import { useState } from "react";
import { SearchEngine } from "./structures/SearchEngine.js";
import { mockProducts } from "./data/mockProducts.js";
import SearchBar from "./components/SearchBar.jsx";
import TopResults from "./components/TopResults.jsx";
import ProductForm from "./components/ProductForm.jsx";
import ProductList from "./components/ProductList.jsx";
import "./App.css";

function createEngine() {
  const engine = new SearchEngine();
  mockProducts.forEach((p) => engine.insert(p.name, p.popularity));
  return engine;
}

function App() {
  const [engine] = useState(createEngine);

  const [prefix, setPrefix] = useState("air");
  const [k, setK] = useState(2);
  const [error, setError] = useState("");
  const [, setTick] = useState(0);

  const handleAdd = (name, popularity) => {
    try {
      engine.insert(name, popularity);
      setError("");
      setTick((t) => t + 1);
      return true;
    } catch (e) {
      setError(e.message);
      return false;
    }
  };

  const results = engine.searchTopK(prefix, k);
  const totalMatches = engine.searchPrefix(prefix).length;

  return (
    <div className="app">
      <header>
        <h1>Smart Search</h1>
        <p className="muted">Trie para buscar por prefijo + MinHeap para el Top K</p>
      </header>
      <SearchBar prefix={prefix} k={k} onPrefixChange={setPrefix} onKChange={setK} />
      <div className="layout">
        <TopResults prefix={prefix} k={k} results={results} totalMatches={totalMatches} />
        <aside>
          <ProductForm onAdd={handleAdd} />
          {error && <p className="error">{error}</p>}
          <ProductList products={engine.products} />
        </aside>
      </div>
    </div>
  );
}

export default App;