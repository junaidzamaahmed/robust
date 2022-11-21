import { useEffect, useState } from "react";
import { LoadingScreen } from "../components/LoadingScreen/LoadingScreen";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setIsLoading(false), 3000), [];
  // });
  return isLoading ? <LoadingScreen /> : <Component {...pageProps} />;
}

export default MyApp;
