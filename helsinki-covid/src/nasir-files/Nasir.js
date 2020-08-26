import React, { useState, useEffect } from "react";

export default function Nasir() {
  const [state, setstate] = useState([]);
  useEffect(() => fetchData(), []);
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/finland");
    const data = await response.json();
    console.log(data);
    setstate(data.confirmed);
  };
  console.log(state);

  return (
    <div>
      <h1 style={{ color: "pink" }}>Helsinki Confirmed cases</h1>
      <br></br>
      <p>{state.value}</p>
    </div>
  );
}
