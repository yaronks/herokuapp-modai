
import React, { useState, useEffect } from 'react';
import '../App.css';
import NavBarMain from './NavBarMain';
import Form from 'react-bootstrap/Form';
import { Container, Typography, FormGroup, Button, FormControlLabel, Checkbox, FormControl} from '@material-ui/core'


function ItemUpload() {

return (
    <div className='MainPage'>
        <NavBarMain> </NavBarMain>
        <div className="card-container-upload" >
        <div  className="card-text-upload">
            Add Item to Your Closet
        </div>    
    <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label></Form.Label>
        <Form.Control type="file" size="lg" />
    </Form.Group>
    <div className='checks-container'> 
    <h6> In which season(s) do you wear this item? </h6>
    <FormGroup >
    <div style={{flexDirection:'column'}}> 
    <FormControlLabel control={<Checkbox color='black'/>} label="Summer"/> 
    <FormControlLabel control={<Checkbox color='black' />} label="Winter"/>
    <FormControlLabel control={<Checkbox color='black' />} label="Fall"/>
    <FormControlLabel control={<Checkbox color='black' />} label="Spring"/>
    </div>
    </FormGroup>
    <div className='checks-container-upload'> 
    <h6> Item Category </h6>
    <FormGroup >
    <div style={{flexDirection:'column'}}> 
    <FormControlLabel control={<Checkbox color='black'/>} label="Work Wear"/> 
    <FormControlLabel control={<Checkbox color='black' />} label="Casual"/>
    <FormControlLabel control={<Checkbox color='black' />} label="Going Out"/>
    <FormControlLabel control={<Checkbox color='black' />} label="Vacations"/>
    </div>
    </FormGroup>
    </div>
    <div className="submit-item-button" >
          <Button 
            href='/my-closet'
            type="submit"
            fullWidth
            variant="contained"
            color="white"
          >
            Add Item
          </Button>
        </div>
    </div>
    </div>
    </div>
)


}

export default ItemUpload;