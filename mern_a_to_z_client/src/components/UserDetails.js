import React from 'react'
import '../App.css';
import { Container, Typography, RadioGroup, Button, FormControlLabel, Radio, FormControl, Grid } from '@material-ui/core'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const UserDetails = ({ prevStep, nextStep, handleChange, values, variable }) => {
  
  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }
  return (
    <Container>
      <div  className="card-container">
      <div  className="card-text">
        Select Your {variable==="topSize"? "Tops": "Bottoms"} Size
    </div>
    <FormControl>
     <RadioGroup

    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="d"
    name="radio-buttons-group"
  >
    <div className='checks-container'>
    <FormControlLabel value="xs" control={<Radio color='black' checked={values[variable] === 'xs'} onChange={handleChange(variable, 'xs')}/>} label="XS" />
    <FormControlLabel value="s" control={<Radio  color='black' checked={values[variable] === 's'} onChange={handleChange(variable, 's')}/>} label="S" />
    <FormControlLabel value="m" control={<Radio color='black' checked={values[variable]  === 'm'} onChange={handleChange(variable, 'm')}/>} label="M" />
    <FormControlLabel value="l" control={<Radio color='black' checked={values[variable]  === 'l'} onChange={handleChange(variable, 'l')}/>} label="L" />
    <FormControlLabel value="xl" control={<Radio color='black'  checked={values[variable] === 'xl'} onChange={handleChange(variable, 'xl')}/>} label="XL" />
    </div>
    </RadioGroup>
            <div className='button-container'>
            <div  className="prev-button">
              <Button 
               startIcon={<ArrowBackIcon />}
                onClick={ Previous }
                type="submit"
                fullWidth
                variant="contained"
                color="white"
              >
                Previous
              </Button>
              </div>
              <div  className="next-button">
              <div className='align-right'> 
              <Button 
              startIcon={<ArrowForwardIcon />}
                onClick={ Continue }
                type="submit"
                fullWidth
                variant="contained"
                color="white">
                Next
              </Button>
              </div>
              </div>
              </div>
          </FormControl>
      </div>
    </Container>
  )
}

export default UserDetails