import React from 'react';

function Video(props){
    return(
        <div>
            <iframe width="100%" height="450" title='youtube-embed'
                src={props.url}>
            </iframe>
        </div>
    )
   
}

export default Video;