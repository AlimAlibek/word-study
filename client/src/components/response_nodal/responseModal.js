
import React from 'react';

function ResponseModal(props) {
    return(
        <div className={`responseModal ${props.type}`}>
            {props.children}
        </div>
    )
}

export default ResponseModal;