import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  //INITIALIZE STATE
  const [snowReports, setReports] = useState({})

  //USE EFFECT to RENDER PAGE
  useEffect(() => {
    //axios & fetch
    const fetchData = async () => {
      const response = await axios(
        `/reports`
      );
      setReports(response.data);
    };
    fetchData();
  }, []);

  console.log(snowReports);
  return (
    <div>
      <h1>SNELP</h1>
    </div>
  );
}

export default App;