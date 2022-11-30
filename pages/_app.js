import GlobalStyles from "../styles/GlobalStyles";
import "../styles.css";

function MyApp({Component, pageProps}) {
  return (
    <>
      <div className="logo">
        <img src="/img/Logo.png" />
      </div>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
