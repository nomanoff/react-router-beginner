import React from "react";
import Topics from './Topics';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";


import styled from "styled-components";

const ExampleWrapper = styled.section`
  width: 1000px;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b4b4b3;
  margin: 0 auto;
`;



export default function Example() {

    const userLoggedIn = true; //Just To Experiment <Redirect /> Component


    const history = useHistory() // To access the history instatnce
    function handleClick(){
      history.push('/');
    }


    const location = useLocation() //To show the current location.
    console.log(location.pathname);


    let {} = useParams();

    console.log();



  return (
    <ExampleWrapper>
      <Router>
        <div>    
          <ul>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <Switch>   
            <Route path="/topics">
            {userLoggedIn ? <Topics /> : <Redirect to='/'/>}
            </Route>
          </Switch>
        </div>
        <button onClick={handleClick}>Go Home</button>
      </Router>
    </ExampleWrapper>
  );
}




