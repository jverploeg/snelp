import React, { useState, useEffect } from 'react';
import axios from 'axios';
//components
import ReportList from './reportList';

function App() {
  //INITIALIZE STATE
  const [snowReports, setReports] = useState([])

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

  // console.log(snowReports);
  //conditionally render page only when data has been fetched
  if(!snowReports) { return null; };
  return (
    <div>
      <h1>SNELP</h1>
      <div className="body">
        <ReportList reports={snowReports} />
      </div>
    </div>
  );
}

export default App;