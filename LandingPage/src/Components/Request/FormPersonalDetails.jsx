import React,{Component} from 'react'
import TextField from '@material-ui/core/TextField';
import {Button} from '../ButtonElements';


export class FormPersonalDetails extends Component {
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
              placeholder="Enter Your Address Line1"
              label="Address1"
              onChange={handleChange('Address1')}
              defaultValue={values.Address1}
              margin="normal"
              fullWidth
            />
            <br/>
            <TextField
              placeholder="Enter Your Address Line2"
              label="Address2"
              onChange={handleChange('Address2')}
              defaultValue={values.Address2}
              margin="normal"
              fullWidth
            />
            <br/>
            <TextField
              placeholder="Enter Your Pincode"
              label="Pincode"
              onChange={handleChange('Pincode')}
              defaultValue={values.Pincode}
              margin="normal"
              fullWidth
            />
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
export default FormPersonalDetails;
