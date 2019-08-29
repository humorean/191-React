import React from 'react';

function AnchorText(props){
    const {href, text} = props.data;
    return(
        <span>
            <a href={href}>{text}</a>
        </span>
    )
    
}

export default AnchorText;