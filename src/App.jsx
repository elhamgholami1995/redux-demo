import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import CakeContainer from "./components/CakeContainer";
import MilkContainer from "./components/MilkContainer";
import UsersList from "./components/UsersList";

function App() {
  return (
    <Provider store={store}>
      <h1>REDUX</h1>
      <div className="main">
        <CakeContainer />
        <MilkContainer />
        <hr />
        <UsersList />
      </div>
    </Provider>
  );
}

export default App;
