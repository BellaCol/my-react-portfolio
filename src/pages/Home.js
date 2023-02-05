import React from 'react';
import LindkedIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import '../styles/Home.css';


function Home (){
  return (
    <div className='Home'> 
      <div className='about'> 
        <h2> Hi, My Name is Bella</h2>
        <div className='prompt'> 
          <p>
            An electrical enginieer whit a passion for develp, learning and creating.
          </p>
          <LindkedIcon/>
          <EmailIcon/>
          <GithubIcon/>
        </div>
      </div>
      <div className='skills'>
        <h1> skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front-End</h2>
            <span> 
              ReactJS, HTML, CSS,BootStrap,Yarn, StyledComponents
            </span>
          </li>
          <li className='item'>
            <h2> Back-End</h2>
            <span> 
              NodeJs, MySQL 
            </span>
          </li>
          <li className='item'>
            <h2> Languages</h2>
            <span>
              Javascript, Python, C, C++, PHP
            </span>
          </li>
        </ol>
      </div>
    </div>
 )
};

export default Home