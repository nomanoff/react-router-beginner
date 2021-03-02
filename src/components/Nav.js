import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';


const StyledNav = styled.nav`
  width: 100%;
  color: #fff;
  background-color: #333;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1rem;
  padding: 10px 30px;
`;


export default function Nav() {
  return (
    <StyledNav>
      <h2>Logo</h2>
      <ul className='nav-links'>
            <Link to='/'>
              <li>Home</li>   
            </Link>
            <Link to='/about'>
              <li>About</li>   
            </Link>
            <Link to='/facts'>
              <li>Facts</li>   
            </Link>
         
         
      </ul>
    </StyledNav>
  );
}
