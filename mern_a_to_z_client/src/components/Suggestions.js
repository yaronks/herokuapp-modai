
import React, { useState, useEffect } from 'react';
import '../App.css';
import NavBarMain from './NavBarMain';
import Form from 'react-bootstrap/Form';
import { Container, Typography, FormGroup, Button, FormControlLabel, Checkbox, FormControl} from '@material-ui/core'


function Suggestions() {

return (
    <div className='MainPage'>
        <NavBarMain> </NavBarMain>
        <h1 className='heading-text'>Suggested Outfits</h1>
        <h3 className='subheading-text'> This page will have outfit suggestions</h3>
    </div>
)


}

export default Suggestions;