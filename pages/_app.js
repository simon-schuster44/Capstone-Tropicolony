import {useState} from "react";
import GlobalStyles from "../styles/GlobalStyles";

function MyApp({Component, pageProps}) {
  const [saveState, setSaveState] = useState(false);
  return (
    <>
      <GlobalStyles />
      <Component
        {...pageProps}
        saveState={saveState}
        setSaveState={setSaveState}
      />
    </>
  );
}

export default MyApp;
