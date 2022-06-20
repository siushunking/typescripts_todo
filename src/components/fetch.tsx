import React, {FC} from 'react'
import { useState, useEffect } from "react";
import { Post } from '../interfaces/InterFacesPost'

const Fetch:FC =()=>{ 
    const [result, setResult] = useState<Post[]>([]);
   
    useEffect(() => {
        const api = async () => {
          const data = await fetch("localhost:4000/get-all-post", {
            method: "GET"
          });
          const jsonData = await data.json();
          setResult(jsonData.results);
        };
    
        api();
      }, []);

    return(
        <div>
           {result.map((value) => {
          return (
            <div>
              <div>{value._id}</div>
              <div>{value.description}</div>
            </div>
          );
        })}
        </div>
    )

}

export default Fetch