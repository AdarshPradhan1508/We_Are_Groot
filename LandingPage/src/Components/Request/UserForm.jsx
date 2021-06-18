import React,{Component} from 'react'
import ChooseItems from './ChooseItems';
import DateFinal from './DateFinal';
import FinalPage from './FinalPage';
import FormPersonalDetails from './FormPersonalDetails';
import FormUserDetails from './FormUserDetails';


const styles = {
    button: {
        margin:15
    },
    select:{
         width:400,
         padding:50
    }
}

export class UserForm extends Component {

     state = {
        step:1,
        Name:'',
        MobileNumber:'',
        Address1:'',
        Address2:'',
        Pincode:'',
        Items:[]
    };   

    //Proceed to next step
     nextStep = () => {
    const { step } = this.state;
    this.setState({
        step:step+1
    });
    };

    //Go to previous step
     prevStep =() => {
        const { step } = this.state;
        this.setState({
            step:step-1
        });
    };

    //To Handle fields Change

    handleChange = input => e =>{
        this.setState({[input]: e.target.value});
    }
    // AddValues = input =>e =>{
    //     this.setState({[input]:(e.target.value)});
        

    // }
    render(){
    const {step} =this.state;
    const { Name , MobileNumber,Address,Pincode,Items} = this.state;
    const values = {Name , MobileNumber,Address,Pincode,Items}

    switch(step)
    {
        case 1:
            return(
                <FormUserDetails 

                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    style = {styles.button}
                />
            )
        case 2:
            return(<FormPersonalDetails 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                style = {styles.button}
            />);
        case 3:
            return(<ChooseItems 
                 nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                style = {styles.select}
                styleB = {styles.button}

            />);
        case 4:
            return(<DateFinal 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                style = {styles.button}
            />);
        case 5:
            return(<FinalPage /> );
    }
    }
}

export default UserForm;
