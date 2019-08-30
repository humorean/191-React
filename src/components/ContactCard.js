import React from 'react'; 

class ContactCard extends React.Component{
    render(){
        const {title,content} = this.props.data;
        const lineContent = content.map(line=>{
            return <p>{line}</p>
        })
        return(
            <div className='contact-card'>
                <h3>{title}</h3>
                <div>
                    {lineContent}
                </div>
                
            </div>
        )
    }
}

export default ContactCard;