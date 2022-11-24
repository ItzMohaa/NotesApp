import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar ">
            
            <Link to="/"><div className="logo">NOTEPADDER</div></Link> 
            <ul>
                <Link to="/"><li>My Notes</li></Link>
                <Link to="/About"><li>New Note </li></Link>
            </ul>
                

            </div>
            
        
     );
}
 
export default Navbar;