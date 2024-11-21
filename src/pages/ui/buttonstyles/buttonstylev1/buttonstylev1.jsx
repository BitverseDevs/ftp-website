import React from 'react';
import { Button } from '@mui/material';
import './buttonstylev1.scss';

function ButtonStyleV1(props) {
    const { type, label } = props;
    return <Button className='contactSubmitBtn' type={type} variant='contained'>{label}</Button>
}

export default ButtonStyleV1;