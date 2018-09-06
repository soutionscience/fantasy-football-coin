import react, {Component} from 'react';
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch';
import Field from '../components/field';
import ShowTeamPlayer from '../components/showTeamPlayers';
import {Container, PanelIcon, Control, 
    Input, Icon, Title, Panel, PanelBlock,
     PanelHeading, PanelTab, PanelTabs,
    Column, Columns} from 'bloomer'



const FFCApi ='https://ffc-server.herokuapp.com/api/teams';
const FFCLocal ='http://localhost:3000/api/teams'
const playerLocal = 'http://localhost:3000/api/players'
   //styles
const bg ={
    background: 'white',
    height: '100%',
    marginTop: '8px',
    padding: '8px'
};


        




export default class Teams extends Component{
 


    //all my states
    state={
        selectedTeam: 1,
        teamPlayers: ''
    }
    static async getInitialProps(props){
       
        const res = await fetch(FFCApi);
        const teamData = await res.json()
        console.log(`Show data fetched. Count: ${teamData.length}`)
        //console.log(props)
        // const teamUrl = `http://localhost:3000/api/players/?team_code=1`
        // console.log('test')
        // const res2 = await fetch(teamUrl);
        // const data = await res2.json()
        // console.log(`Show players fetched. Count: ${data.length}`)
        // // this.setState({teamPlayers:data})
        return {teams: teamData}

    }


    //show players from selected team
    selectedTeam = async (e, id)=>{
      //e.preventDefault()
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
            <PanelHeading>Your Team</PanelHeading>
            <Field/>

        </Panel>
        </Column>
        <Column className='is-one-fifth'>
        <Panel>
            <PanelHeading>Select Team</PanelHeading>
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
            <PanelBlock className ="panel_block" onClick={(e) => this.selectedTeam(e, index.code)}
            isActive key={index._id}>
        <PanelIcon className="fa fa-book" />
        {index.name}
    </PanelBlock>

        ))} 

  

        </Panel>
        </Column>
        <Column className='is-one-third'>
        <Panel>
        <PanelHeading>Select Players</PanelHeading>
       <ShowTeamPlayer  players ={this.state.teamPlayers}/>
       </Panel>
        </Column>
        </Columns>
        </div>
        </Container>

        <style jsx global>{`
       .panel_block {
            cursor: pointer
        }
        .panel_block:hover{
            background-color: grey;
            color: white

        }
        `}</style>
        
        </Layout>)

    }
}