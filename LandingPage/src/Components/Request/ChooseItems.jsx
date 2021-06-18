import React,{Component} from 'react'
import TextField from '@material-ui/core/TextField';
import {Button} from '../ButtonElements';
import Select from 'react-select';

// const styles = {
//     button: {
//         margin:15
//     },
//     select:{
//          width:'100%',
//          maxWidth:600
//     }
// }
export class ChooseItems extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
    const { values, handleChange,styles} = this.props;
    const options = [
        { label: "Paper", value: "paper" },
        { label: "Plastics", value: "plastics" },
        { label: "Metal", value: "metal" },
        { label: "E-Waste", value: "ewaste" },
        { label: "Other", value: "other" },
    ];
    // const [selected,setSelected] = useState([]);
    
    return (
        <React.Fragment>
            
            <div style = {styles} class="SearchClass">
            {/* <Select
            isMulti
            options={options}
            value={options.value}
            placeholder={'Select'}
            onChange={handleChange('Items')}
            labelledBy="Select"
            width='200px'
            
            /> */}
            <Select
            isMulti
            options={options}
            placeholder="Select"
            
            />
            

            </div>

            
            <br/>
            <Select
            isMulti
            options={options}
            placeholder="Select"
            
            />
            <br/>
            
            <Button
              label="Back"
              primary={false}
              styleB = {styles}
              onClick={this.back}
            >Back</Button>
            <Button
              label="Continue"
              primary={false}
              styleB = {styles}
              onClick={this.continue}
            >Continue</Button>
        </React.Fragment>
    )
} 
}
 
export default ChooseItems;
