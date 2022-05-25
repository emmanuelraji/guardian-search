import "./App.css";
import { useState } from "react";

// components
import Search from "./components/Search";
import Results from "./components/Results";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  return (
    <main className="app">
      <div className="container">
        <Search
          setData={setData}
          setIsLoading={setIsLoading}
          setHasSearched={setHasSearched}
        />
        <Results
          results={data}
          isLoading={isLoading}
          hasSearched={hasSearched}
        />
      </div>
    </main>
  );
}

export default App;
