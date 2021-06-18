import React,{Component} from 'react'
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import {Button} from '../ButtonElements';

export class DateFinal extends Component {
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
            <TextField
                id="date"
                label="Pickup"
                type="date"
                defaultValue="2021-06-18"
                
                InputLabelProps={{
                shrink: true,
                }}
            />
            <br/>
            <TextField
                id="time"
                label="Time"
                type="time"
                defaultValue="07:30"
                InputLabelProps={{
                shrink: true,
                }}
                inputProps={{
                step: 300, // 5 min
                }}
            />
            <br/>
            
            <Button
              label="Back"
              primary={false}
              style = {styles}
              onClick={this.back}
            >Back</Button>
            <Button
              label="Continue"
              primary={false}
              style = {styles}
              onClick={this.continue}
            >Confirm</Button>
        </React.Fragment>
    )
} 
}
 const styles = {
     button: {
         margin:15
     }
 }
export default DateFinal;