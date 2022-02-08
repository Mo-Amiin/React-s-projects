import React from 'react';
import {conterestColor} from './conterestColor.js'

function Button({bgcolor = 'primary-color',label = 'click' , textColor}) {
  textColor = conterestColor(bgcolor,textColor);
  return <button className={`button-style ${bgcolor + " " +  textColor}`}>{label}</button>
}

export default Button;
