import React from 'react';

const Button = ({ btn_text }) => {
    return (
        <div>
            <button className='bg-[#251D58] font-semibold px-8 md:px-10 py-3 text-white'>{btn_text}</button>
        </div>
    );
};

export default Button;