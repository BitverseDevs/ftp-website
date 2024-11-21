import React from 'react';
import './contactinput.scss';
import { TextField } from '@mui/material';

export function ContactInput(props) {
    const { 
        variant,
        label,
        labelFor,
        type,
        onChange,
        placeholder,
        value,
        required,
        pattern
    } = props;
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
        }
    };

    return (
        <React.Fragment>
            <TextField 
                className='contact-input--input'
                label={label}
                onChange={onChange}
                type={type}
                value={value}
                variant='outlined'
                required={required ? required : false}
                onKeyDown={handleKeyDown}
            />
            {/* <input
                className='contact-input--input'
                id={labelFor}
                name={labelFor}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                value={value}
                required={required ? required : false}
                onKeyDown={handleKeyDown}
            /> */}
        </React.Fragment>
    );
}

export default ContactInput;