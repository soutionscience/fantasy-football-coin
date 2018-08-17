import react, {Component} from 'react';

import Header from './header';
import {Image} from 'bloomer';
import Head from 'next/head';
import Footer from './footer';


const bg ={
 
  // background: 'url(/static/images/background.png) center scroll',
  background:'black',
   width: '100%'
}
const myBody={
  backgroundColor:"#F5F5F5",
  height: '100%',
  border: '1px #BDBDBD solid',
  borderRadius: '1%',
   paddingTop: '20px'
  // marginRight: '20px'

}



export default props=>{
  return( <div>
          <Head>
            
       <script src="https://use.fontawesome.com/releases/v5.0.13/js/all.js"></script>
       <script src="https://unpkg.com/bloomer/bundles/bloomer.min.js"></script>
       {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous"></link> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css"></link>
        {/* <link rel="stylesheet" href="/_next/static/css/main.css" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
    </Head>

  <div className ="bg">
 
  
  <Header/>
    {props.children}
    <Footer/>
    </div>
     
     <style global jsx>{`
       .bg {
       background: url(/static/images/background.png) center scroll;
  
      
      }

      

     `}
     
     </style>
   
    </div>)
}