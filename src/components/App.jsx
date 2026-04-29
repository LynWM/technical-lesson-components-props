import React from "react";
import NavBar from "./navbar";
import Home from "./home";
import About from "./about";

import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar/>
      <Home name={user.name} city={user.city} color={user.color}/>
      <About bio={user.bio} links={user.links}/>
    </div>
  );
}

export default App;