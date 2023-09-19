import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import Menu from "./component/Menu"
import Home from "./component/Home"
import Pnf from "./component/Pnf"
import About from "./component/About";
import Contact from "./component/Contact";
import Projects from "./component/Projects";
import Resume from "./component/Resume";
function App(props){
  return (
   <BrowserRouter>
      <Menu/>
      <Routes>
          <Route path= {`/home`} element = {<Home/>}/>
          <Route path= {`/about`} element = {<About/>}/>
          <Route path= {`/projects`} element = {<Projects/>}/>
          <Route path= {`/resume`} element = {<Resume/>}/>
          <Route path= {`/contact`} element = {<Contact/>}/>

          <Route path={`/*`}element = {<Pnf/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App