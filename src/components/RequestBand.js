import React from 'react';
import SectionText from './SectionText';
import AnchorText from './AnchorText';

class RequestBand extends React.Component {
    render(){
        return(
            <div id='band-request-div'>
                <SectionText data={{
                    title: 'Request The Band',
                    content: 'Fill out the band request form DD2536 which you can find the link below. Save the file on you local drive then send it back to jeremy.g.garrido.mil@mail.mil.',
                }}/>
                <AnchorText data={{href:'/public/dd2536.pdf', text:'DD2536'}}/>
                <br />
                <img src='https://upload.wikimedia.org/wikipedia/commons/8/83/191st_US_Army_Band.jpg' alt='191st army band' />
            </div>
        )
    }
}

export default RequestBand;