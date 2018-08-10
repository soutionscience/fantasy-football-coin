import react, {Component} from 'react';
import {Container, Title, Field, Control, FieldBody, FieldLabel, Label, Input,
         Icon, Button} from'bloomer'

const logos ={
    backgroundColor: '#009688',
    //height: '50px',
     padding: '20px',
    color:'white'
}

export default class Login extends Component{

    render(){
        return(
            <div style={logos}>
            <Container>
       
            <Field isHorizontal>
<FieldLabel isNormal>
    <Label> <p issize={5} style={{color:'white'}}>Please Login</p></Label>
   
</FieldLabel>
<FieldBody>
    <Field isGrouped>
        <Control isExpanded hasIcons='left'>
            <Input placeholder='Email' />
            <Icon issize='small' isAlign='left'><span className="fa fa-user" aria-hidden="true"/></Icon>
        </Control>
    </Field>
    <Field>
        <Control hasIcons={['left', 'right']}>
            <Input isColor='success' placeholder='password' value='' />
            <Icon issize='small' isAlign='left'><span className='fa fa-envelope' /></Icon>
            <Icon issize='small' isAlign='right'><span className='fa fa-check' /></Icon>
        </Control>
    </Field>
</FieldBody>

<Button style={{marginLeft: '8px'}}> Submit</Button>
</Field>


               
               
                </Container></div>
        )
    }

}