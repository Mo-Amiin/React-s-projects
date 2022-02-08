import React from 'react';
import './section.css'
import {conterestColor} from './conterestColor.js'
import Button from './button';

function Section({
    bgcolor="primary-color",
    textColor,
    titel,
    description,
    buttonLabel,
    imgUrl="",
    isReverse = false
}) {
   
   textColor =  conterestColor(bgcolor,textColor);
    
   
  return <div className={`section-container general-padding ${bgcolor} ${isReverse && 'reverse'}`}>
      <div className='side-con '>
          <h4 className='titel secondary-text-color'>{titel}</h4>
          <p className={`description ${textColor}`}>
              {description}
          </p>
         <Button  label={buttonLabel} 
          bgcolor='primary-color'
          textColor='text-white'
          / > 
      </div>
      <div className='side-con'>
          <div className='img'>
              <img src={imgUrl}/>
          </div>
      </div>



  </div>;
}

export default Section;
