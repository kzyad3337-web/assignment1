
import "./App.css";
import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [showProducts, setShowProducts] = useState(true);
  const [name, setName] = useState("");

  const trimmedName = name.trim();

  return (
    <div className="dashboard">
      <h1>React Product Dashboard</h1>

      <button onClick={() => setShowProducts(!showProducts)}>
        {showProducts ? "Hide Products" : "Show Products"}
      </button>

      <label htmlFor="userName">Enter your name:</label>

      <input
        id="userName"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Type your name"
      />

      <p>
        {trimmedName ? `Hello, ${trimmedName}!` : "Welcome to the Product Dashboard!"}
      </p>

      {trimmedName && (
        <button onClick={() => setName("")}>
          Clear Name
        </button>
      )}

      {showProducts && <ProductList />}
    </div>
  );
}

export default App;
