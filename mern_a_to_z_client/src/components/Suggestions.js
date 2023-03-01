import React, { useState, useEffect } from 'react';
import '../App.css';
import NavBarMain from './NavBarMain';
import Form from 'react-bootstrap/Form';
import { Container, Typography, FormGroup, Button, FormControlLabel, Checkbox, FormControl} from '@material-ui/core'
import TitlebarGridList from './Cards'
import GenerateOutfitButton from './GenerateOutfitButton';

function Suggestions() {

return (
    <div className='MainPage'>
        <NavBarMain> </NavBarMain>
        <h1 className='heading-text'>Suggested Outfits</h1>
        {/* <TitlebarGridList />    */}
        <GenerateOutfitButton/>
    </div>
)


}

export default Suggestions;