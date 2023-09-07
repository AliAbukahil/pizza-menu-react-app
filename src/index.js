import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React!</h1>;
}

// React v18 rendering
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React rendering before V18

// ReactDOM.render(<App />, document.getElementById("root"));
