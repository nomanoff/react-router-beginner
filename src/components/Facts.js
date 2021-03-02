import React, {useState, useEffect} from "react";


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
    <div>
      <h3>Facts</h3>
      <ol style={}>
       {facts.map((fact, index) =>{
         return <li key={fact._id}>{fact.text}</li>
       })} 
      </ol>
    </div>
  );
}
