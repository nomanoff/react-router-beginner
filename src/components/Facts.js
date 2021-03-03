import React, {useState, useEffect} from "react";
import styled from 'styled-components'

const FactsWrapper = styled.section`
  width: 1000px;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  padding: 10px 20px;
  text-align: start;
`;

const StyledListItem = styled.li`
  margin: 10px;
  padding: 3px 10px;
  font-size: 1.2rem;
  font-weight: 500;
  background-color: #e0e0e0 
  
  `;


export default function Facts() {

  const [facts, setFacts] = useState([]);

  useEffect(()=>{
    fetchItmes();
  }, [])

  const fetchItmes = async () =>{
    const data = await fetch('https://cat-fact.herokuapp.com/facts');

    const items = await data.json();
    setFacts(items);
  }

  

  console.log(facts);
    
  return (
    <FactsWrapper>
      <h3>Cat Facts:</h3>
      <ol>
       {facts.map((fact, index) =>{
         return <StyledListItem  key={fact._id}>{fact.text}</StyledListItem>
       })} 
      </ol>
    </FactsWrapper>
  );
}
