import react, {Component} from 'react';

import Header from './header';
import {Image} from 'bloomer'

const bg ={
  position: 'fixed',
   top:' 0',
   left: '0',
   backgroundImage: "url('/static/images/background.png')", 
   backgroundSize: 'cover', 
   width: '100%', 
   height:'100%', 
   padding:'20px'
}




export default props=>{
  return( <div style={bg}>
  
  <Header>
    {props.children}
    </Header>
    </div>)
}