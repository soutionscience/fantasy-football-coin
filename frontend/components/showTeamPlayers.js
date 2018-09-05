import react, {Component} from 'react'
import { Panel, PanelBlock } from 'bloomer';

const playerLocal = 'http://localhost:3000/api/players';

export default class ShowTeamPlayers extends Component{

    static async getInitalProps(props){
        console.log("test")
        return {}

    }

       renderPlayers(){
        // const items = this.props.players.map(address => {
        //     return (
        //       <div> {address.web_name}</div>
          
            
        // )
        //   });
        //   return items
    }
    
render(){
 
    const team_code = this.props.teamCode
    
    return(<div>
        <Panel>
        {/* {this.renderPlayers()} */}
   </Panel>
    </div>)
}
}