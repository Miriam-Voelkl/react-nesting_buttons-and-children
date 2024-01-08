import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click me first</Button>
      <Button>Then me</Button>
      <Button>I am the third button</Button>
      <Button>And another button</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
