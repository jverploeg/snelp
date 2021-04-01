//import React, { useState, useEffect } from 'react';
//import Report from './report';
import Link from 'next/link'
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from "next/router"
//import { getReports } from '../lib/queries';
// const pgp = require('pg-promise')({
//   noWarnings: true
// })

// const getReports = (query) => {
//   return new Promise ((resolve, reject) => {
//     podb.query(query)
//       .then((res) => {
//         resolve(res.rows);
//       })
//       .catch((err) => {
//         console.log('err: ', err);
//         reject(err);
//       });
//   });
// };
// const report = async(req,res) => {
//   await db.any(`SELECT * FROM snow2`);
// }

// db.any(`SELECT * FROM snow2`, [true])
//     .then(function(data) {
//         // success;
//     })
//     .catch(function(error) {
//         // error;
//     });


const ReportList = ({ reports }) => {
  //state/props
  // console.log({props})
  // useEffect(() => {
  //   const { snowList } = getQueryParams(window.location.search);
  // }, []);
  const router = useRouter()
  const {
    query: { id },
  } = router
  console.log({id})
  // const reports = db.any(`select * from users where active = $1`)
  // .then(data => {
  //     console.log('DATA:', data); // print data;
  // })
  // .catch(error => {
  //     console.log('ERROR:', error); // print the error;
  // })
  // .finally(db.$pool.end);

  //const { reports } = props;
  // console.log({reports});
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
      <Link href="/">
          <a>Back to home</a>
        </Link>
  </div>
  )
}

// export async function getServerSideProps() {
//   // call disabled to show the error
//   const users = await findUsers()
//   return {
//     props: {
//       users: [] //returned an empty array to avoid other errors
//     }
//   }
// }

// ReportList.getInitialProps = async appContext => {
//   let pageProps = [];
//   if (appContext.Component.getInitialProps) {
//     pageProps = await appContext.Component.getInitialProps(appContext.ctx);
//   };

//   return {
//     pageProps
//   };
// };




export default ReportList;