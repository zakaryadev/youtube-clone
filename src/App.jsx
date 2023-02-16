import React from "react";
import Root from "./root";
import Loader from "./components/Loader";
const App = () => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return <Root />;
};

export default App;
