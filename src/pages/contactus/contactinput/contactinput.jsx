import React from 'react';
import './contactinput.scss';
import { TextField } from '@mui/material';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

export function ContactInput(props) {
    const { label, labelFor,type, onChange, value, required, formValuesSetter } = props;
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
        }
    };

    return (
        <React.Fragment>
            {type === 'date' || type === 'time' ? 
                type === 'date' ? 
                <DatePicker label='Appointment Date' onChange={(value) => formValuesSetter((prevState) => ({
                    ...prevState, 
                    datePreferences: dayjs(value).format('DD/MM/YYYY'),
                }))} required /> 
                : 
                <TimePicker label='Preferred Time' onChange={(value) => formValuesSetter((prevState) => ({
                    ...prevState,
                    timePreferences: dayjs(value).format('hh:mm:ss A')
                }))} required />
            : 
                <TextField 
                    name={labelFor}
                    label={label}
                    onChange={(e) => onChange(e)}
                    type={type}
                    value={value}
                    variant='outlined'
                    required={required ? required : false}
                    onKeyDown={handleKeyDown}
                />
            }
        </React.Fragment>
    );
}

export default ContactInput;