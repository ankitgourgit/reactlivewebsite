import React from "react";
import { Route,Routes} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Menu from "./Menu";
import Service from "./Service";
import User from "./User";
import Search from "./Search";



const App=()=>{
  return(
    <>
    <Menu/>
     <Routes>
       <Route exact path="/" element={<About name="About"/>}/>
       <Route exact path="/service" element={<Service name="Service"/>}/>
       <Route exact path="/search" element={<Search/>}/>
       <Route exact path="/contact" element={<Contact name="Contact"/>}/>
       <Route exact path="/user/:fname/:lname" element={<User/>}/>
       <Route path="/*" element={<Error/>}/>
     </Routes>


    </>
  )
}
export default App;