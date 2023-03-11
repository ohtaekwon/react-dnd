import React from "react";
import HomePage from "pages/Home";

import Header from "components/header";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <HomePage />
    </DndProvider>
  );
}

export default App;
