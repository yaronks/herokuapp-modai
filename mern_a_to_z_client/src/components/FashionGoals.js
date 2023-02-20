import React from 'react'
import '../App.css'
import { Container, Typography, FormGroup, Button, FormControlLabel, Checkbox, FormControl} from '@material-ui/core'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const FashionGoals = ({ nextStep, handleChange, values }) => {
    
  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  return (
    <Container>
      <div className='card-container'>
        <div  className="card-text">
            Select Your Fashion Goals 
        </div>
        <FormControl>
    <FormGroup >
    <div className='checks-container'> 
  <FormControlLabel control={<Checkbox color='black' defaultChecked={values.sustainabilityGoal} onChange={handleChange('sustainabilityGoal', !values.sustainabilityGoal)}/>} label="Shop Sustainably" value="sustainabilityGoal"/>
  <FormControlLabel control={<Checkbox color='black'  defaultChecked={values.innovateGoal} onChange={handleChange('innovateGoal')}/>} label="Change my Style" value="a"/>
 
  <FormControlLabel control={<Checkbox color='black' defaultChecked={values.saveGoal} onChange={handleChange('saveGoal')}/>} label="Save Money" value="save"/>
  <FormControlLabel control={<Checkbox color='black' defaultChecked={values.saveGoal} onChange={handleChange('fitGoal')}/>} label="Find Better Fits" value="fit"/>
  <FormControlLabel control={<Checkbox color='black' defaultChecked={values.saveGoal} onChange={handleChange('other')}/>} label="Other" value="other"/>
  </div>

    </FormGroup>
        <div className='button-container'>
        <div className="next-button" >
          <Button 
          startIcon={<ArrowForwardIcon />}
            onClick={ Continue }
            type="submit"
            fullWidth
            variant="contained"
            color="white"
            defaultValue={values.FashionGoals}
          >
            Next
          </Button>
        </div>
        </div>
          </FormControl>
      </div>
    </Container>
    
  )
}

export default FashionGoals