import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/button';
import axios from 'axios';
//components
import ReportList from './reportList';
import Start from './form';

export default function App() {
  //INITIALIZE STATE
  const [snowReports, setReports] = useState([])
  const [personalRanking, setRanking] = useState([])
  var ranking = [];

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

  // useEffect(() => {
  //   setRanking(ranking);
  // }, [ranking]);

  const handleSelection = (data) => {
    console.log({data})
    console.log({snowReports})
    let ranks = []
    ranks = snowReports.slice();
    ranks.map(item => {
      item.new_snow = item.new_snow * (10*data.snow);
      item.base = item.base * (data.base);
      item.area_open = item.area_open * (data.open);
      //item.Distance = (400 - item.Distance) * (data.Distance);
      item.total = item.new_snow + item.base + item.area_open + item.snow_score+((400 - item.Distance) * (data.distance/10))  + ( (((item.true_snow/100)+(item.days_over6inches/2)+(item.months_over90)-(item.months_under30/10)))*(data.history/2));
    })
    console.log({ranks})
    ranks.sort((a,b) => b.total - a.total);
    console.log({ranks})
    ranks.map(item => {
      item.new_snow = item.new_snow / (data.snow) / 10;
      item.base = item.base / (data.base);
      item.area_open = item.area_open / (data.open);
      //item.Distance = (400 - item.Distance) * (data.Distance);
    })
    ranks = ranks.slice(0,10);
    ranking = ranks.slice();
    console.log({ranking})
    setRanking(ranking);
  }
  const reset = () => {
    setRanking([]);
  }

  //conditionally render page only when data has been fetched
  if(!snowReports) { return null; };
  return (
    <Router>
      <div>
        <h1>SNELP</h1>
        {/* <div className="body">
          <div className="form">

          </div>
          <div className='reports'>
            <ReportList reports={snowReports} />
          </div>
        </div> */}
      </div>
      <div>
        {/* <Button>
         <Link to="/">Home</Link>
        </Button> */}
        <a>
        <Start
          //handleSelection={handleSelection}
          onChange={(data) => handleSelection(data)}
        />
        </a>
        <Button
          onClick={reset}
        >
         REFRESH
        </Button>




        {/* <Link to="/start">Get Started</Link> */}

      {/* <Switch>
        <Route path="/start">
            <Start />
        </Route>
      </Switch> */}
      </div>
      <div>
          {/* <ReportList reports={ranking} /> */}
        {!!personalRanking &&
          <ReportList reports={personalRanking} />
        }
      </div>
    </Router>
  );
}

//   return <h2>Home</h2>;
// }

// export default App;