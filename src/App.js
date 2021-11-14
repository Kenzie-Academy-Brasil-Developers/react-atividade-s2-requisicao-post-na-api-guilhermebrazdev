import Login from "./components/Login";
import { ToastContainer, toast, Toaster } from "react-hot-toast";
import { useState } from "react";
import Display from "./components/Display";

import "./App.css";

function App() {
  const [request, setRequest] = useState("");
  console.log("aqui", request);

  return (
    <div className="App">
      <header className="App-header">
        <Toaster />
        <Login setRequest={setRequest} request={request} />
        <Display request={request} />
      </header>
    </div>
  );
}

export default App;
