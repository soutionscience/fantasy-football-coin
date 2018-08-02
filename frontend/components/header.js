import react, {Component} from 'react';
import Navbar from './navbar';
import Logos from './logos';
import Banner from './banner';
import Login from './login'





export default class Header extends Component{
    render(){
        return(<div><Navbar/>
        <Logos/>
        <Banner/>
        <Login/>
        </div>)
    }
}