import React from 'react'
import '../App.css'
import { Container, Box, Slider, Typography, FormGroup, Button, FormControlLabel, Checkbox, FormControl} from '@material-ui/core'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PriceSelect = ({ prevStep, nextStep, handleChange, values, variable }) => {
    
  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }
  const Previous = e => {
    e.preventDefault();
    prevStep();
  }
  const marks = [
    {
      value: 0,
      label: '$0',
    },
    {
      value: 20,
      label: '$20',
    },
    {
        value: 60,
        label: '$60',
      },

      {
        value: 100,
        label: '$100',
      },

      {
        value: 150,
        label: '$150',
      },
      {
        value: 300,
        label: '$300+',
      },
    
  ];

  function valuetext(value) {
    return `$${value}`;
  }

  function valueNum(value) {
    return value;
  }

  return (
    <Container>
      <div className='card-container'>
        <div  className="card-text">
            How Much Do You Usually Spend Buying {variable.substring(5)} ? 
        </div>
        <FormControl>
        
        <Slider
        max={300}
        value={values[variable]}
        aria-label="Custom marks"
        getAriaValueText={valuetext}
        step={5}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={handleChange(variable, valueNum)}
        />
        
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

export default PriceSelect