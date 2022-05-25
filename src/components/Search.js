import { useState } from "react";
import { GUARDIAN_API_KEY } from "../config";
import "../App.css";

export default function Search({ setData, setIsLoading, setHasSearched }) {
  const [term, setTerm] = useState("");

  const getArticle = async (term) => {
    const URL = `https://content.guardianapis.com/search?q=${term}&api-key=${GUARDIAN_API_KEY}`;
    setIsLoading(true);
    setHasSearched(true);
    try {
      const response = await fetch(URL, {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3001",
        },
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const json = await response.json();
      setIsLoading(false);
      setData(json.response.results);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <header>
      <h1>Guardian Search</h1>
      <div className="search-bar">
        <div className="search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button onClick={() => getArticle(term)}>Search</button>
      </div>
    </header>
  );
}
