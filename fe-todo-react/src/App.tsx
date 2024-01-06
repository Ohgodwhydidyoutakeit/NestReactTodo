import React from "react";
import "./App.scss";
import { MainBody } from "./ui/MainBody.component";
import { DeleteArea } from "./ui/delete-area/DeleteArea.component";
import { EditArea } from "./ui/edit-area/EditArea.component";

function App() {
  return (
    <div className="App">
      <EditArea />
      <MainBody />
      <DeleteArea />


    </div>
  );
}

export default App;
