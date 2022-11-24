import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewNote = (Notes) => {
    const [title, setNew] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();

    const HandleSubmit =(e)=>{
        e.preventDefault();

        const note = {title, body};

        fetch("http://localhost:8000/notes", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(note)
        })
        .then(()=>{
            navigate('/')
        })
    }


    return ( <div className="about">
         <motion.div animate={{y:0}} initial={{y:200}} transition={{type:"spring", duration:2}} className="heading ">
            <div className="flex justify-center text-white"><h1 className="mt-4 ">NEW NOTE</h1></div>
            <form onSubmit={HandleSubmit}>
            <div className="flex justify-center">
                
            <label className="m-4 text-white">Note title</label>
            <input className=" m-4  rounded-md" type="text"
            value={title}
            required
            onChange={(e)=> setNew(e.target.value)}/>
            </div>

            <div className="flex justify-center">
            <label className="text-white m-4">Note Body</label>
            
            <textarea className="m-4 rounded-lg w-96 h-56" required
            value={body}
            onChange={(e)=>setBody(e.target.value)}/>
           
            </div>
            <button className="flex justify-center text-white ">Create Note </button>
           
            </form>
        
        </motion.div>
       
    </div> );
}
 
export default NewNote; 