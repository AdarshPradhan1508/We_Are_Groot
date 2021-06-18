import React from 'react'
import {RequestContainer,RequestWrapper,RequestRow,RequestColumnWrapper,RequestColumn1,RequestColumn2,RequestTop} from './RequestElements'
import UserForm from './UserForm';
const RequestOrder = () => {
    return (
        <>
        <RequestContainer>
        <RequestTop>Make a PickUp Request</RequestTop>
        
        <RequestWrapper> 
            <UserForm />
        </RequestWrapper>

        
        
        </RequestContainer>
        </>
    )
}

export default RequestOrder;
