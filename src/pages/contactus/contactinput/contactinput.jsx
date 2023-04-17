import React from 'react';
import './contactinput.scss';

export function ContactInput(props) {
    const { 
        label,
        labelFor,
        type,
        onChange,
        placeholder,
        value,
        required,
        pattern
    } = props;
    // console.log(label, "aaaaa", Object.getPrototypeOf(label), typeof label)
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
        }
    };

    return (
        <React.Fragment>
            <label htmlFor={labelFor} className='contact-input--label'>{label}</label>
            <input
            className='contact-input--input'
            id={labelFor}
            name={labelFor}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            value={value}
            // {...required? required: ''}
            // {...pattern? pattern: ''}
            required={required}
            pattern={pattern}
            onKeyDown={handleKeyDown}
            />
        </React.Fragment>
    );
}

export default ContactInput;