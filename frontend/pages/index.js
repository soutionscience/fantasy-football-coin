import react, {Component} from 'react';
import NavBar from '../components/navbar'
import Layout from '../components/Layout';
import {Container, Card, Columns, Column, 
        CardContent, Content, CardImage, Image, CardHeader, CardHeaderTitle} from 'bloomer'


const bodyBg ={
    backgroundColor: 'white'
}


export default class Home extends Component{
    render(){
        return(
            <Layout>
                <div style ={bodyBg}>
                <Container>
                    <Columns isCentered>
                     <Column isSize={{ mobile: 8, default: '1/3'}}>
                     <Card>
                         <CardHeader>
                             <CardHeaderTitle>Pick your squad</CardHeaderTitle>
                         </CardHeader>
                     <CardImage>
                         <Image isRatio='4:2' src='/static/images/football-player.png' />
                        </CardImage>
                         <CardContent>
                         <Content>
                          Use your coins to buy and build your team
                           <br/>
                           <small>Solidity, web3.js, truffle suit</small>
                         </Content>
                         </CardContent>
                     </Card>
                     </Column>
                     <Column isSize={{ mobile: 8, default: '1/3'}}>
                     <Card>
                         <CardContent>
                         <Content>
                          Use your coins to buy and build your team
                           <br/>
                           <small>Solidity, web3.js, truffle suit</small>
                         </Content>
                         </CardContent>
                     </Card>
                     </Column>
                     <Column isSize={{ mobile: 8, default: '1/3'}}>
                     <Card>
                         <CardContent>
                         <Content>
                          Use your coins to buy and build your team
                           <br/>
                           <small>Solidity, web3.js, truffle suit</small>
                         </Content>
                         </CardContent>
                     </Card>
                     </Column>
                    </Columns>

                </Container>
                </div>
            </Layout>
        )
    }
}