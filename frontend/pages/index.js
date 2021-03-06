import react, {Component} from 'react';
import NavBar from '../components/navbar'
import Layout from '../components/Layout';
import {Container, Card, Columns, Column, 
        CardContent, Content, CardImage, Image, CardHeader, CardHeaderTitle} from 'bloomer'


// const bodyBg ={
//     backgroundColor: 'black',
//     height: '100%'
// }


export default class Home extends Component{
    render(){
        return(
            <Layout>
                <div>
                <Container>
                    <Columns isCentered>
                     <Column issize={{ mobile: 8, default: '1/3'}}>
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
                     <Column issize={{ mobile: 8, default: '1/3'}}>
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
                     <Column issize={{ mobile: 8, default: '1/3'}}>
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
                    <div>Test</div>

                </Container>
                </div>
            </Layout>
        )
    }
}