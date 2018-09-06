import React from 'react'
import { PanelBlock } from 'bloomer/lib/components/Panel/PanelBlock';

const Field = () => {
  return (
    <div>
        <PanelBlock>
    <div className ='bg'>

     </div>
    </PanelBlock>
    
    <style jsx>{`
       .bg {
       background: url(/static/images/pitch.png) center scroll;
       background-repeat: no-repeat;
       width: 100%;
       height: 600px;
         }`}
      </style>
    </div>
  )
}

export default Field
