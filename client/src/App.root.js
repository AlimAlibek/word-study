import React, {useState} from "react";
import Auth from "./pages/Auth";
import App from "./pages/App";

function AppRoot() {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");

  React.useEffect( () => {
    const locStor = localStorage.getItem("UserToken");
    if (locStor) {
      setToken(locStor);
    }
    setLoading(false);
  }, [])

  return (
    <>
      {

          token 
            
            ? <App token={token} setToken={setToken} />
        
            : <Auth setToken={setToken} setLoading={setLoading} loading={loading}/>
      } 
    </>
  );
}

export default AppRoot;
