import React from "react";
import { Store } from "./Components/Store";
import { Link } from "@reach/router";

export default function App(props:any): JSX.Element {
  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick & Morty</h1>
          <p>Pick your Favourite Episode {state.episodes.length} </p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/fav">Favourite(s) : {state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </React.Fragment>
  );
}
