import React, { Component } from 'react'
import UserDetails from './UserDetails'
import FashionGoals from './FashionGoals'
import PriceSelect from './PriceSelect'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import NavBarMain from './NavBarMain';

export default class InitialSurvey extends Component {

  state = {
    step: 1,
    sustainabilityGoal: false,
    innovateGoal: false,
    saveGoal: false,
    fitGoal: false,
    other: false,
    topSize: '', 
    bottomSize: '',
    priceTops: 0,
    pricePants: 0,
    priceAccessories: 0,
  }

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }
  
  onSubmit = (e) => {
//     // e.preventDefault();

//     // axios
//     //   .post('http://localhost:8082/api/books', book)
//     //   .then((res) => {
//     //     setBook({
//     //       title: '',
//     //       isbn: '',
//     //       author: '',
//     //       description: '',
//     //       published_date: '',
//     //       publisher: '',
//     //     });

//     //     // Push to /
//     //     navigate('/');
//     //   })
//     //   .catch((err) => {
//     //     console.log('Error in CreateBook!');
//     //   });
};

  render() {
    const { step } = this.state;
    const { saveGoal, innovateGoal, sustainabilityGoal, topSize, bottomSize, usualSpending } = this.state;
    const values = { saveGoal, innovateGoal, sustainabilityGoal, topSize, bottomSize, usualSpending }
    
    switch(step) {
      case 1: 
        return (
            <div className="survey-div" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <FashionGoals 
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
          </div>
        )
      case 2: 
        return (
          <div className="survey-div" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
          <UserDetails 
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
            variable="topSize"
          />
          </div>
        )
      case 3: 
          return (
            <div className="survey-div" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <UserDetails 
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              handleChange={ this.handleChange }
              values={ values }
              variable="bottomSize"
            />
            </div>
          )
        case 4: 
          return (
            <div className="survey-div" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <PriceSelect 
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              handleChange={ this.handleChange }
              values={ values }
              variable="priceTops"
            />
            </div>
          )
          case 5: 
          return (
            <div className="survey-div" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <PriceSelect 
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              handleChange={ this.handleChange }
              values={ values }
              variable="pricePants"
            />
            </div>
          )
          case 6: 
          return (
            <div className="survey-div" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <PriceSelect 
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              handleChange={ this.handleChange }
              values={ values }
              variable="priceAccessories"
            />
            </div>
          )
      case 7: 
          return (
            <div>
              <NavBarMain> </NavBarMain>
            
            <div className="survey-div" style={{textAlign:'center', justifyContent:'center', flexDirection: 'row', alignItems:'center', height:10000}}>
            
            <div style={{padding:'200px'}}> 
            <h1> Thank You! </h1>
            <h2> Now that we know a bit more about you, we can start your fashion journey! </h2>
              </div>
            </div>
            </div>
          )
      default: 
          // do nothing
    }
  }
}


// const InitialSurvey = (props) => {

//   // Define the state with useState hook
//   const navigate = useNavigate();
//   const [userPreferences, setPreferences] = useState({
//     step: 1,
//     sustainabilityGoal: false,
//     innovateGoal: false,
//     saveGoal: false,
//     topSize: '', 
//     bottomSize: '',
//     usualSpending: 0,
//   });

//   const onChange = (e) => {
//     setPreferences({ ...userPreferences, [e.target.name]: e.target.value });
//   };

//   const onSubmit = (e) => {
//     // e.preventDefault();

//     // axios
//     //   .post('http://localhost:8082/api/books', book)
//     //   .then((res) => {
//     //     setBook({
//     //       title: '',
//     //       isbn: '',
//     //       author: '',
//     //       description: '',
//     //       published_date: '',
//     //       publisher: '',
//     //     });

//     //     // Push to /
//     //     navigate('/');
//     //   })
//     //   .catch((err) => {
//     //     console.log('Error in CreateBook!');
//     //   });
//   };
//   const { step } = this.state;
//   const { saveGoal, innovateGoal, sustainabilityGoal, topSize, bottomSize, usualSpending } = this.state;
//   const values = { saveGoal, innovateGoal, sustainabilityGoal, topSize, bottomSize, usualSpending };

//   return (<h2 className='display-4 text-center'>First Page</h2>)
//   // switch(step) {
//   //     case 1: 
//   //       return (
//   //           <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
//   //           <FashionGoals 
//   //           nextStep={ this.nextStep }
//   //           handleChange={ this.handleChange }
//   //           values={ values }
//   //         />
//   //         </div>
//   //       )
//   //     case 2: 
//   //       return (
//   //           <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
//   //           <UserDetails 
//   //           prevStep={ this.prevStep }
//   //           nextStep={ this.nextStep }
//   //           handleChange={ this.handleChange }
//   //           values={ values }
//   //         />
//   //         </div>
//   //       )
//       // case 3: 
//       //     return (
//       //       <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
//       //       <Confirmation 
//       //         prevStep={ this.prevStep }
//       //         nextStep={ this.nextStep }
//       //         values={ values }
//       //       />
//       //       </div>
//       //     )
//       //   case 4: 
//       //     return (
//       //       <Success />
//       //     )
//    //   default: 
//           // do nothing
// //}
// };

// export default InitialSurvey;
