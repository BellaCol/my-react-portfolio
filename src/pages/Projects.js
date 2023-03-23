import React from 'react';
import Slideshow from '../components/Slideshow.js';
import '../styles/Projects.css';
import styled from 'styled-components';
import Footer from '../components/Footer';

function Projects (){
  return (
   <>
   <main>
      <Titulo>Projects</Titulo>
      <Slideshow/>
      
    </main>
    <Footer /> 
   </> 
  );
}

const Titulo = styled.p`
  font-size: 18px;
  font-weight: 700 px;
  text-transform: uppercase;
  margin-bottom: 10px;  
  `;

export default Projects