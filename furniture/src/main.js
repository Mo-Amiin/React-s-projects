import React from 'react';
import Nav from './components/navigation/nav';
import Section from './components/section/section';
import data from './data.json'

function Main() {
  return <div className='main'>
         <Nav/>
         {
           data.map((info,index) => {
             return(
             <Section 
             {...info}
             imgUrl={`${info.img}${index+1}.png`}
             isReverse = {index %2 !=0}
             bgcolor = {index %2==0 ? 'primary-color' : 'bg-white'}
             key={info.id}
             
             />
             
             );
           })};
         
         
         
       
         
  </div>;
}

export default Main;
