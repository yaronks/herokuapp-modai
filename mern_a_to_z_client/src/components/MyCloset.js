import React, { useState, useEffect } from 'react';
import '../App.css';
import NavBarMain from './NavBarMain';
import Form from 'react-bootstrap/Form';
import { Container, Typography, FormGroup, Button, FormControlLabel, Checkbox, FormControl} from '@material-ui/core'
import TitlebarGridList from './Cards'


function MyCloset() {

return (
    <div className='MainPage'>
        <NavBarMain> </NavBarMain>
        <h1 className='heading-text'> My Closet</h1>
        <TitlebarGridList />        
    </div>
)


}

export default MyCloset;