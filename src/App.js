import React from "react";
import Routes from "./Routes";
import Nav from "./Components/Nav";
import Store from "./Store/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Nav />
        <Routes/>
      </div>
    </Provider>
  );
}

export default App;
