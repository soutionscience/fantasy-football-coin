import react, {Component} from 'react';
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch';
import {Container, PanelIcon, Control, Input, Icon, Title, Panel, PanelBlock, PanelHeading, PanelTab, PanelTabs} from 'bloomer'


const FFCApi ='https://ffc-server.herokuapp.com/api/teams';

const bg ={
    background: 'white',
    height: '100%',
    marginTop: '8px',
    padding: '8px'
}



export default class Teams extends Component{
    static async getInitialProps(){
        const res = await fetch(FFCApi);
        const data = await res.json()
        console.log(`Show data fetched. Count: ${data.length}`)
        return {teams: data}

    }
    render(){
        return(<Layout>
            <Container>
        <div style = {bg} >
        <Title>Teams</Title>
        <Panel>
            <PanelHeading>Select players</PanelHeading>
            <PanelBlock>
        <Control hasIcons='left'>
            <Input isSize='small' placeholder='Search' />
            <Icon isSize='small' isAlign='left'>
                <span className='fa fa-search' aria-hidden='true' />
            </Icon>
        </Control>
    </PanelBlock>
        

        {this.props.teams.map((index)=>(
            // <PanelTab key={index._id}>{index.name}</PanelTab>
            <PanelBlock isActive key={index._id}>
        <PanelIcon className="fa fa-book" />
        {index.name}
    </PanelBlock>

        ))}

  

        </Panel>
        </div>
        </Container>
        
        </Layout>)

    }
}