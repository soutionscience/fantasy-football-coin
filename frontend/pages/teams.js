import react, {Component} from 'react';
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch';
import ShowTeamPlayer from '../components/showTeamPlayers';
import {Container, PanelIcon, Control, 
    Input, Icon, Title, Panel, PanelBlock,
     PanelHeading, PanelTab, PanelTabs,
    Column, Columns} from 'bloomer'


const FFCApi ='https://ffc-server.herokuapp.com/api/teams';
const FFCLocal ='http://localhost:3000/api/teams'
const playerLocal = 'http://localhost:3000/api/players'

const bg ={
    background: 'white',
    height: '100%',
    marginTop: '8px',
    padding: '8px'
}



export default class Teams extends Component{

    //all my states
    state={
        selectedTeam: 1,
        teamPlayers: ''
    }
    static async getInitialProps(){
       
        const res = await fetch(FFCApi);
        const data = await res.json()
        console.log(`Show data fetched. Count: ${data.length}`)
        return {teams: data}

    }


    //show players from selected team
    selectedTeam = async (e, id)=>{
      e.preventDefault()
      this.setState({selectedTeam: id})
      const teamUrl = `http://localhost:3000/api/players/?team_code=${id}`
      const res = await fetch(teamUrl);
      const data = await res.json()
      console.log(`Show players fetched. Count: ${data.length}`)
      this.setState({teamPlayers:data})
    }
    render(){
        return(<Layout>
            <Container>
        <div style = {bg} >
        <Title>Teams</Title>

        <Columns>
        <Column>
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
        

        {/* {this.props.teams.map((index)=>(
            // <PanelTab key={index._id}>{index.name}</PanelTab>
            <PanelBlock onClick={(e) => this.selectedTeam(e, index.code)}
            isActive key={index._id}>
        <PanelIcon className="fa fa-book" />
        {index.name}
    </PanelBlock> */}

        {/* ))} */}

  

        </Panel>
        </Column>
        <Column>
       <ShowTeamPlayer teamCode={this.state.selectedTeam} players ={this.state.teamPlayers}/>
        </Column>
        </Columns>
        </div>
        </Container>
        
        </Layout>)

    }
}