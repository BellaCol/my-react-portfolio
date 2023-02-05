import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School'
import WorkIcon from '@material-ui/icons/Work'

function Experience (){
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='March-December 2020'
          iconStyle={{background: '#3e487a', color:'#fff'}}
          icon={<SchoolIcon />}        
        >
          <h3 className='vertical-timeline-element-tittle'>
          Vocational Training Center Nº8 - SMATA- Argentina Place
          </h3>
          <p> Introduction to robotics and Arduino (based C++)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='May-October 2020'
          iconStyle={{background: '#3e487a', color:'#fff'}}
          icon={<SchoolIcon />}        
        >
          <h3 className='vertical-timeline-element-tittle'>
          Postgraduate Higher Training Center - Euroinnova Business School- online.
          </h3>
          <p> Electrical Control System </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2010 - 2014'
          iconStyle={{background: '#3e487a', color:'#fff'}}
          icon={<SchoolIcon />}        
        >
          <h3 className='vertical-timeline-element-tittle'>
            My UNITEC University, Venezuela Place,Carabobo State
          </h3>
          <p> University Diploma Electrical Enginieer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='December 2020 - December 2022'
          iconStyle={{background: '#e9d35b', color:'#fff'}}
          icon={<WorkIcon />}        
        >
          <h3 className='vertical-timeline-element-tittle'>
            CEM Consulting, Argentina Place
          </h3>
          <p> Project and works engineer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='September 2017 - April 2018'
          iconStyle={{background: '#e9d35b', color:'#fff'}}
          icon={<WorkIcon />}        
        >
          <h3 className='vertical-timeline-element-tittle'>
          Bbti sac, Peru Place
          </h3>
          <p>Commercial Engineer, </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
};

export default Experience

