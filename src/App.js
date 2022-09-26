import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://twitter.com/danipass0s"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daniela Passos
          </a>
        </footer>
      </div>
    </div>
  );
}
