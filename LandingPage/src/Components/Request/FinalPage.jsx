import React,{Component} from 'react'
import TextField from '@material-ui/core/TextField';
import {ButtonR} from '../ButtonRElements';
import {FinalHeading} from './RequestElements';

export class FinalPage extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
    const { values, handleChange,styles } = this.props;
    return (
        <React.Fragment>
            <FinalHeading>You have successfully raised a pick request!</FinalHeading>
            <br/>
            
            <ButtonR
              to="/"
              label="Back"
              primary={false}
              style = {styles}
              
            >Go Home</ButtonR>
            
        </React.Fragment>
    )
} 
}

export default FinalPage;