import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import {Route, Routes} from "react-router-dom"
import NewNote from "./Components/NewNote";
import Note from "./Components/Note";
import Editnote from "./Components/EditNote";
import useFetch from "./Components/useFetch";



function App() {
  const {note} = useFetch("http://localhost:8000/notes")
  return (
    <div className="App">
      <Navbar/>


      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/About" element={<NewNote />}/>
        <Route exact path ="/Note/:id" element={<Note/>}/>
        <Route exact path ="Edit/:id" element={ <Editnote/>}/>
      </Routes>

     
    
    </div>
  );
}

export default App;
