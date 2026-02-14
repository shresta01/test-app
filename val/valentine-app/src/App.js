import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import YayPage from "./YayPage";

function App() {
  const word = "NEHAHAHA!";

  const letterPatterns = {
    N: [
      ["YES","","","","YES"],
      ["YES","YES","","","YES"],
      ["YES","","YES","","YES"],
      ["YES","","","YES","YES"],
      ["YES","","","","YES"],
    ],
    E: [
      ["YES","YES","YES"],
      ["YES","",""],
      ["YES","YES",""],
      ["YES","",""],
      ["YES","YES","YES"],
    ],
    H: [
      ["YES","","","YES"],
      ["YES","","","YES"],
      ["YES","YES","YES","YES"],
      ["YES","","","YES"],
      ["YES","","","YES"],
    ],
    A: [
      ["","YES","YES",""],
      ["YES","","","YES"],
      ["YES","YES","YES","YES"],
      ["YES","","","YES"],
      ["YES","","","YES"],
    ],
    "!": [
      ["YES"],
      ["YES"],
      ["YES"],
      [""],
      ["YES"],
    ]
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <h1 className="question">💖 Will you be my Valentine?? 💖</h1>
            
            {/* Word Grid */}
            <div className="word-container">
              {word.split("").map((char, i) => (
                <div key={i} className="letter-grid">
                  {letterPatterns[char]?.map((row, r) => (
                    <div key={r} className="row">
                      {row.map((cell, ci) => (
                        <span key={ci} className="cell">
                          {cell === "YES" ? (
                            <Link to="/yay" className="yes-block">YES</Link>
                          ) : (
                            <span className="empty"></span>
                          )}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Extra Button */}
            <Link to="/yay">
              <button className="valentine-button">OFCOURSE YES!</button>
            </Link>
          </div>
        }
      />
      <Route path="/yay" element={<YayPage />} />
    </Routes>
  );
}

export default App;
