import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="text-3xl font-bold bg-pink-200">Hello World</p>
    </>
  );
}

export default App;
