import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import {Container, Row} from 'reactstrap';


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
    const[page, setPage] = useState(1)
    const [data, setData] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
      axios.get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(Response => setData(Response.data.results))
      console.log(Response)

    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [page]);

  const Previous = () =>  {
    if(page > 1){
        setPage(page - 1);
    }
    console.log(page)
};

const next = () => {
    if(page < 25){
        setPage(page + 1);
    }
    console.log(page)
};


  return (
 
        <Container>
           <button onClick = {Previous}>Previous</button>
            <button onClick = {next}>Next</button>
            <Row>
        {data.map((char,index) => (
          <CharacterCard 
          name = {char.name} 
          status = {char.status} 
          gender = {char.gender}
          image = {char.image}
          key = {index}
          />
        ))}
        </Row>
       </Container>
     
  );
}

