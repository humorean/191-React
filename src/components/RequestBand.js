import React from 'react';
import SectionText from './SectionText';

class RequestBand extends React.Component {
    render(){
        return(
            <div>
                <SectionText data={{
                    title: 'Request The Band',
                    content: 'Fill out the band request form DD2536, save it on you local drive then attach it below to send band request.  Attach your completed DD2536 here:'
                }}/>
            </div>
        )
    }
}

export default RequestBand;