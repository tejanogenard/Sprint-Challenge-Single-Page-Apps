import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";
import WelcomePage from "./components/WelcomePage.js";



export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
    </main>
  );
}
