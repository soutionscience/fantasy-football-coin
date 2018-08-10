import react, {Component} from 'react';
import {Title} from 'bloomer';

const banner ={
    color: 'white',
    height: '250px',
    padding: '100px'
}


export default class Banner extends Component{
    render(){
    return(<div>
        <Title>The First Football based Coin</Title>
    </div>)
    }
}