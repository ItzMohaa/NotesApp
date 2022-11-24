import { Link } from "react-router-dom";

const AllNotes = ({Notes}) => {

   console.log(Notes);
    return ( 
        <div className="Notes">
            {Notes.map(Note=>(
                <Link to={`/Note/${Note.id}`}><div className="note-preview" key={Note.id}>
                    <h1>{Note.title}</h1>
                    </div>
                    </Link>

))}

        </div>
     );
}
 
export default AllNotes;