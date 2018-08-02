import react, {Component} from 'react';
import {Navbar, NavbarBrand, NavbarItem, NavbarMenu, NavbarStart,
     NavbarEnd, Icon, Container} from 'bloomer';



const myNav={
    border: '1px #3F51B5 solid',
    borderRadius: '1%',
    backgroundColor: '#303F9F',
    color: 'white'
}
const mytext={
    color: 'white'
}


export default class navbar extends Component{
  
    render(){
        return(
        <Navbar style={myNav}>
         <Container>
            <NavbarBrand>
                <NavbarItem style={mytext}>
                    Football coin
                </NavbarItem>
            </NavbarBrand>
            <NavbarMenu>
                <NavbarStart>
                    <NavbarItem  style={mytext}>
                        Home
                    </NavbarItem>
                    <NavbarItem  style={mytext}>
                        My Team
                    </NavbarItem>
                    <NavbarItem  style={mytext}>
                       Leagues
                    </NavbarItem>
                    <NavbarItem  style={mytext}>
                        Market
                    </NavbarItem>
                </NavbarStart>
              <NavbarEnd>
                  <NavbarItem style={mytext}>
                <Icon className='fab fa-bitcoin' />
                <span style={{marginLeft: '4px'}}>0</span>
                  </NavbarItem>
              </NavbarEnd>
            </NavbarMenu>
            </Container>
        </Navbar>)
    }
}