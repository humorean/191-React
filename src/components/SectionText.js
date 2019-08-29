import React from 'react';
import AnchorText from './AnchorText';

class SectionText extends React.Component{
    state={
        opts:null
    };
    render(){
        const {content,title,anchorText,anchorLink,id} = this.props.data;
        return (
            <div id={id} className='section-text'>
                <h3>{title}</h3>
                <p className='site-text'>
                   {content}
                    <AnchorText data={{href:anchorLink,text:anchorText}}/>
                </p>
            </div>
            
        )
    }
}

export default SectionText;