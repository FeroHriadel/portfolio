import React from 'react';

const TextWrapperLines = () => {
    return (
        <div className='lines-wrapper'>

            {[...Array(30)].map((el, idx) => (
                
                <div className='line-section' key={idx}>
                    <div className='thin-line'></div>
                    <div className='thin-line'></div>
                    <div className='thin-line'></div>
                    <div className='thin-line'></div>
                    <div className='thin-line'></div>
                </div>
                
            ))}

        </div>
    )
};

export default TextWrapperLines;
