import Icon1 from '../../Images/svg-1.png';
import Icon2 from '../../Images/svg-2.png';
export const homeObjOne ={

    id:'sell',
    lightBg: false,
    lightText:true,
    lightTextDesc: true,
    topLine:'Sell Here',
    headline: 'Get rid of your waste today!',
    description: "Raise a pickup request to sell your waste and we'll be there",
    buttonLabel:'Raise request',
    imgStart:false,
    img:{Icon1},
    alt:'Yay',
    to:"/sell",
    dark: true,
    primary: true,
    darkText: false

};
export const homeObjTwo ={

    id:'buy',
    lightBg: true,
    lightText:false,
    lightTextDesc: false,
    topLine:'Shop Here',
    headline: 'Buy Eco-friendly products',
    description: "Use your collected coins to make the Earth Green",
    buttonLabel:"Let's Shop",
    imgStart:true,
    img:require('../../Images/svg-2.png'),
    alt:'Yay1',
    to:"/index.html",
    dark: false,
    primary: false,
    darkText: true

};
export const homeObjThree ={

    id:'footprint',
    lightBg: true,
    lightText:false,
    lightTextDesc: false,
    topLine:'Carbon Footprint',
    headline: 'Calculate your carbon footprint',
    description: "Make it your goal to leave this planet with the biggest carbon footprint one can possibly leave",
    buttonLabel:'Calculate',
    imgStart:false,
    img:require('../../Images/svg-1.png'),
    alt:'Yay2',
    to:"/sell",
    dark: false,
    primary: false,
    darkText: true

};