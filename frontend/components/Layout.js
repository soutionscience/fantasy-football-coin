import react, {Component} from 'react';

import Header from './header';
import {Image} from 'bloomer';
import Head from 'next/head';
import Footer from './footer';
import '../style.css'

const bg ={
  position: 'fixed',
   top:' 0',
   left: '0',
   backgroundImage: "url('/static/images/background.png')", 
  
   backgroundSize: 'cover', 
   width: '100%',
   //overflowY: 'scroll' 
   minHeight:'100%', 
   //padding:'15px'
  //  paddingRight: '25px'
}
const myBody={
  //backgroundColor:"#F5F5F5",
  height: '100%',
  //border: '1px #BDBDBD solid',
  borderRadius: '1%',
   paddingTop: '20px'
  // marginRight: '20px'

}



export default props=>{
  return( <div className="example">
          <Head>
            
       <script src="https://use.fontawesome.com/releases/v5.0.13/js/all.js"></script>
       {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous"></link> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css"></link>
        <link rel="stylesheet" href="/_next/static/css/main.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
    </Head>

  <div className= "example">
  
  <Header/>
    {props.children}
    <Footer/>
    </div>
   
    </div>)
}