import { useState, useEffect } from "react";

const useFetch = (url) =>{
    const [Notes, setNotes] = useState(null);
    const [loading, setloading]= useState(true)

    

    useEffect(()=>{
        setTimeout(() => {
            
        
        fetch(url)
        .then((res)=>{
            return res.json();
        })
        .then(data=>{
            setNotes(data);
            setloading(false);

        })
    }, 500);
       
    },[]);

    return {Notes,setNotes, loading};
    

}


export default useFetch;