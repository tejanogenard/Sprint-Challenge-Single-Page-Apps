import React, { useEffect, useState } from "react";
import axios from 'axios';
import characterCard from './CharacterCard';
import CharacterCard from "./CharacterCard";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
    const[page, setPage] = useState(1)
    const [data, setData] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
      axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(Response => setData(Response.data.results))
      console.log(Response)

    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [page]);

  return (
      <div>
        {data.map((char,index) => (
          <CharacterCard 
          name = {char.name} 
          status = {char.status} 
          gender = {char.gender}
          image = {char.image}
          key = {index}
          />
        ))}
       
      </div>
  );
}
