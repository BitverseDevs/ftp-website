import React from 'react';
// import { borderLine } from '../../../../data/uiData';
// import borderLine from '../../data/uiData';
import { borderLine } from 'data/uiData';
import './borderline.scss';



export function BorderLine(props) {
    const custWidth = props?.custWidth;
    const firstShape = borderLine[0];
    const secondShape = borderLine[1];
    return (
        <React.Fragment>
            <section className='borderline-container' style={{width: `${custWidth}px`}}>
                <div className='borderline-line-bg'></div>
                <div className='borderline-content'>
                    {/* <img className='borderline-sh1' src={firstShape?.assetSrc} alt={firstShape?.alt} key={firstShape?.id+'1'}/> */}
                    {/* <img className='borderline-sh2' src={secondShape?.assetSrc} alt={secondShape?.alt} key={secondShape?.id+'2'}/> */}
                    {/* <img className='borderline-sh1' src={fir/stShape?.assetSrc} alt={firstShape?.alt} key={firstShape?.id+'3'}/> */}
                </div>
            </section>
        </React.Fragment>
    );
}

export default BorderLine;