import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [smth, setsmth]=useState("");
  useEffect(()=>{
    getsmth();
  }, [])

  async function getsmth(){
    const response=await axios.get("/api/temp");
    console.log(response.data);
    setsmth(response.data);
  }

  return (
    <>
      <h1>helloo {smth}</h1>
    </>
  )
}

export default App;
