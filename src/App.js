import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"250px"}}>
      <p>You Counter : {count} times</p>
      <button
        style={{
          color: "pink",
          background: "black",
          border: "1px solid red",
          margin: "4px",
          borderRadius: "6px"
        }}
        onClick={() => (count >= 5 ? setCount(count) : setCount(count + 1))}
      >
        Tambah
      </button>
      <button
        style={{
          color: "pink",
          background: "black",
          border: "1px solid red",
          borderRadius: "6px"
        }}
        onClick={() => (count <= 0 ? setCount(count) : setCount(count - 1))}
      >
        Kurang
      </button>
    </div>
  );
}
export default App;
