import { useParams, useNavigate, Link } from "react-router-dom";
import useFetch from "./useFetch";
import { motion } from "framer-motion";


const Note = () => {
  const {id} =  useParams()
  const navigate = useNavigate();
  const { Notes :note, loading } = useFetch("http://localhost:8000/notes/" + id)

  const Handledelete =()=>{
    fetch("http://localhost:8000/notes/" + note.id, {
        method: "DELETE"
    })
    .then(
        navigate("/")

    )
  }
 

    return ( 
         <div>
            {loading ? <div className="text-white flex justify-center">Loading Please wait...</div> :(
        <motion.div animate={{y:0}} initial={{y:100}} transition={{type:"spring", duration:2}} className="note text-white">

            {note && (
            <article>
            <h2 className="m-4 ">{note.title}</h2>
            <p className="m-4">{note.body}</p>
            <button className= "  bg-red-700"onClick={Handledelete}>DELETE NOTE</button>
           <Link to={`/Edit/${note.id}`}> <button> Edit Note</button></Link>
            </article>

            
)}

        </motion.div>
            )
}
        </div>
       
     )};

 
export default Note;