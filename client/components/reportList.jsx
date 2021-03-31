import React, { useState, useEffect } from 'react';
//import Report from './report';

const ReportList = (props) => {
  //state/props
  const { reports } = props;
  console.log({reports});
  //map the reports
  return (
    <div className="list">
      <table>
        <tr>
          <th>RESORT</th>
          <th>NEW SNOW</th>
          <th>AREA OPEN(%)</th>
          <th>BASE DEPTH</th>
          {/* <th>BASE vs. AVERAGE SNOWFALL</th> */}
        </tr>
        {/* <tr> */}
        {!!reports && reports.map((item, index) => (
          <tr>
            <td>{item.resort}</td>
            <td>{item.new_snow}</td>
            <td>{item.area_open}</td>
            <td>{item.base}</td>
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