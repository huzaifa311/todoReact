import React from 'react'

const Button = (props) => {
    const { text, clickTrigger, customClass } = props;

    return (
        <button
            className={`border m-4 border-gray-950 
            px-3 py-1 w-24 transition-all rounded-lg ${customClass}`}
            onClick={clickTrigger}
        > {text}
        </button >
    )
}

export default Button