import { motion } from "framer-motion";
import AllNotes from "./Notes";
import useFetch from "./useFetch";


const Home = () => {
  const {Notes, loading} = useFetch("http://localhost:8000/notes");
 

    return (  
        <div>
           
        {loading ? <div className="text-white flex justify-center">Loading Please wait....</div> : (
        <motion.div animate={{y:0}} initial={{y:200}} transition={{type:"spring", duration:2}} className="headings">
           {Notes  &&< AllNotes Notes={Notes}/>}
        </motion.div>
        )
}
        </div>
       
    
       

        
    );
}
 
export default Home;