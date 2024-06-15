import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Layout from "./components/Layout/Layout";
import Registration from "./components/modules/Register";



function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>

          <Route index element={<Registration/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
