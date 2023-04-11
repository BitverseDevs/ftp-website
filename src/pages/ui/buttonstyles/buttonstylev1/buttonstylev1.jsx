import React from 'react';
import './buttonstylev1.scss';

function ButtonStyleV1(props) {
    const { type, label } = props;
    return (
        <button type={type} className='button-style--v1-wrap'>
            <div className='button-style--v1-wrap-inner'>
                {label}
            </div>
        </button>
    );
}

export default ButtonStyleV1;