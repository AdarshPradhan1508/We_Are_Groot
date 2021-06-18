import styled from 'styled-components';

export const Select = styled.select`
  width:'100%';
  max-width:600px;
`
export const RequestContainer = styled.div`
 
  color:#fff;
  background:#01bf71;
  ${'' /* border:  */}
  max-width:800px;
  margin:auto;
  margin-top:100px;
  height:860px;
  align-items:center;
  padding:30px;


  @media screen and (max-width: 768px){
       padding: 100px 0;
   }
`
export const RequestWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  background-color:#f7f8fa;
   z-index: 1;
    
   ${'' /* height: 650px; */}
   height:400px;
   width: 80%;
   align-items:center;
   ${'' /* max-width: 600px; */}
   max-width:1100px;
   ${'' /* margin-right:auto;
   margin-left: -25px; */}
   ${'' /* padding: 60px 24px; */}
   padding: 0 24px;
   ${'' /* justify-content: center; */}
`

// export const RequestRow = styled.div`
//    display:grid;
//    grid-auto-columns: minmax(auto, 1fr);
//    align-items: center;
//    grid-template-areas: 'col1 col2';
//    ${'' /* height:250px;
//    background-color:blue;
//    margin:auto; */}

//    @media screen and (max-width:768px){
//     grid-template-areas: 'col2 col2';
//    }
//  `
//  export const RequestColumn1 = styled.div`
//    margin-bottom:15px;
//    padding: 0 15px;
//    grid-area: col1;
//  `
//  export const RequestColumn2 = styled.div`
//    margin-bottom:15px;
//    padding: 0 15px;
//    grid-area: col2;
//  `
//  export const RequestWrapperContainer = styled.div`
//    display:flex;
//    justify-content:center;
//  `

 export const RequestTop = styled.h1`
   text-align:center;
   margin-bottom: 24px;
   font-size: 48px;
   line-height: 1.1; 
   font-weight: 600;
   color: #010606;
   padding-bottom:30px;

   @media screen and (max-width:480px)
   {
       font-size: 32px;
   }
`
export const FinalHeading = styled.h1`
    text-align:center;
    margin-bottom: 24px;
    font-size: 40px;
    line-height: 1.1; 
    font-weight: 600;
    color: #010606;
    padding-bottom:30px;

    @media screen and (max-width:480px)
    {
        font-size: 30px;
    }
`

// export const RequestColumnWrapper = styled.div`
//   max-width:555px;
//   height:100%;
// `