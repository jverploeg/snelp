// import { GetStaticProps } from "next";
// import Link from "next/link";
//import fetch from "node-fetch";
// import { server } from '../config';
// import fetch from 'isomorphic-unfetch';
import { useState } from 'react';
import Link from 'next/link';
import { snow } from '../data';

export const GetStaticProps = async () => {
  return {
    props: {
      snowList: snow,
    },
  }
}



const Index = ({Component, snowList }) => {
  const [snow, setSnow] = useState(snowList);
  console.log({snowList});
  return (
    <div>
      <h1>SNELP</h1>
        <Link href={{pathname: '/reports', query: {id: snowList} }}>
          {/* <Component {snowList} /> */}
          <a>REPORTS</a>
        </Link>
    </div>
  )
}


export default Index