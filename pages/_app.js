// import App from 'next/app'

function MyApp({ Component, pageProps, footerData }) {
  return <Component {...pageProps} footerData={footerData} />
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }
MyApp.getInitialProps = async ({ Component, ctx }) => {
  const footerRes = await fetch('api/snow');
  const footerData = await footerRes.json();
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps, footerData };
};

export default MyApp