import React from 'react'
import { PanelBlock } from 'bloomer/lib/components/Panel/PanelBlock';

const showTeamPlayers = ({players}) => {

  if(!players){
    return(<div> Loading...</div>)
  }
  players = players.map((player)=>{
    return(
      <PanelBlock>
      
        <div className = ' web_name'>
        <div key={player._id}>{player.web_name} </div>
        </div>
        <div className=' now_cost'>
        <div key={player._id}>{player.now_cost/100 *2} coins</div>
        </div>
        <div className='pointsTotal'>
        <div key={player._id}>{player.pointsTotal} Points</div>
        </div>
    
        <style jsx>{
       `.web_name{
        margin-right: grey solid 1px;
        background: #f5f5f5;
        width: 40%;
        padding-right: 2px;
        margin-right: 4px;

       }

       .now_cost{
        width: 30%;
        padding-left: 2px;

       }
       .pointsTotal{
        width: 30%;
        background: #f5f5f5;
        padding-left: 2px;
        margin-left: 4px;
       }
         `
     }
     </style>
      </PanelBlock>
    )

  })
  return (
    <div>
     team players: {players}
     <style jsx>{
       `.web_name{
        background: url(/static/images/background.png) center scroll;

       }
         `
     }
     </style>
    </div>
  )
}

export default showTeamPlayers
