import React, { useState, useEffect } from "react";

export default function Finland() {
  const [state, setstate] = useState({
    confirmed: "",
    recovered: "",
    deaths: "",
  });
  useEffect(() => fetchData(), []);
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/finland");
    const data = await response.json();
    console.log(data);
    setstate({
      confirmed: data.confirmed,
      deaths: data.deaths,
      recovered: data.recovered,
    });
  };

  return (
    <div>
      <h1>Finnish Corona Data</h1>
      <h3 className="confirmed">Helsinki Confirmed cases</h3>
      <p>{state.confirmed.value}</p>
      <h3 className="confirmed">Helsinki Recovered</h3>
      <p>{state.recovered.value}</p>
      <h3 className="confirmed">Helsinki Death</h3>
      <p>{state.deaths.value}</p>
    </div>
  );
}
