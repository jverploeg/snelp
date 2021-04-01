import React, { useState, useEffect } from 'react';
//import Report from './report';

const ReportList = (props) => {
  //state/props
  const { reports } = props;
  console.log({reports})
  //map the reports
  return (
    <div className="list">
      <table>
        <tr>
          <th>RESORT</th>
          <th>NEW SNOW</th>
          <th>AREA OPEN(%)</th>
          <th>BASE DEPTH(")</th>
          <th>TRUE SNOW(")</th>
          <th>DAYS OVER 6"</th>
          <th>MONTHS OVER 90"(%)</th>
          <th>MONTHS UNDER 30"(%)</th>
          {/* <th>SNOW SCORE</th> */}
          {/* <th>BASE vs. AVERAGE SNOWFALL</th> */}
        </tr>
        {/* <tr> */}
        {!!reports && reports.map((item, index) => (
          <tr>
            <td>{item.resort}</td>
            <td>{item.new_snow}</td>
            <td>{item.area_open}</td>
            <td>{item.base}</td>
            <td>{item.true_snow}</td>
            <td>{item.days_over6inches}</td>
            <td>{item.months_over90}</td>
            <td>{item.months_under30}</td>
            {/* <td>{item.snow_score}</td> */}
            {/* <td>{item.BvA}</td> */}
          </tr>
        ))}
        {/* </tr> */}
      </table>
  </div>
  )
}
export default ReportList;


{/* <div>
<Report
  report={item}
/>
</div>
))} */}