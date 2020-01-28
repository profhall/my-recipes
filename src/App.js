import React, {useEffect, useState, useContext} from 'react';
import './App.css';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import SideBar from "./components/SideBar/SideBar";
import { AppProvider} from "./AppContext";
import Content from "./components/Content/Content";
import styled from 'styled-components';


function getDimensions() {
  return {"width":window.innerWidth, "height":window.innerHeight}
}


function App() {

  const [windowWidth, setWidth] = useState(getDimensions()["width"]);
  const [windowHeight, setHeight] = useState(getDimensions()["height"]);
  // const {mains} = useContext(AppContext)

  useEffect(()=>{

    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });

  },[windowWidth,windowHeight])

  const handleResize =()=> {
    setWidth(getDimensions()["width"]);
    setHeight(getDimensions()["height"]);
  };

  window.addEventListener('resize', handleResize);




  return (
    <AppContainer className="App">
    <AppProvider >

      <SideBar />
      <Content width={windowWidth}/>

    </AppProvider>
    </AppContainer>
  );
}

export default App;
const AppContainer  = styled.div`
  height: 100vh;
  width: 100%;
    `