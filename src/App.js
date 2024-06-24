import { useState, useEffect } from "react";
import Router from "./routes";
import "./styles/global.scss";
import PreLoader from "./components/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloading = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(preloading);
  }, []);

  return (
    <div className="App">
      {isLoading && <PreLoader />}
      {!isLoading && <Router />}
    </div>
  );
}

export default App;
