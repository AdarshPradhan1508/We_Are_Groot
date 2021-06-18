import React,{Component} from 'react'
import TextField from '@material-ui/core/TextField';
import {Button} from '../ButtonElements';

export class FormUserDetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    render(){
    const { values, handleChange,styles } = this.props;
    return (
        <React.Fragment>
            <TextField
              placeholder="Enter Your Name"
              label="Name"
              onChange={handleChange('Name')}
              defaultValue={values.Name}
              margin="normal"
              fullWidth
            />
            <br/>
            <TextField
              placeholder="Enter Your Mobile Number"
              label="Mobile Number"
              onChange={handleChange('MobileNumber')}
              defaultValue={values.MobileNumber}
              margin="normal"
              fullWidth
            />
            <br/>
            <Button
              label="Continue"
              primary={false}
              style = {styles}
              onClick={this.continue}
            >Continue</Button>
        </React.Fragment>
    )
} 
}
 const styles = {
     button: {
         margin:15
     }
 }
export default FormUserDetails;
