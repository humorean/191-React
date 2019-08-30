import React from 'react';

function AnchorText(props){
    const {href, text} = props.data;    
    return(
        <span className='anchor-span'>
            <a href={href}>{text}</a>
        </span>
    )
    
}

export default AnchorText;