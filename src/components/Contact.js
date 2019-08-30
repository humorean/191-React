import React from 'react';
import ContactCard from './ContactCard';
class Contact extends React.Component{
    render(){
        return(
            <div id='contact-div'>
                <h2 className='text-bright aln-c'>Contact</h2>
                <div id='contact' className='contact aln-l'>
                    <ContactCard data={{title:'191st Army Band',content:['494 Cromwell Ave','Camp Parks, CA 94568']}}/>
                    <ContactCard data={{title:'Commander:',content:['Telephone: 925-875-4433','Email: jeremy.g.garrido.mil@mail.mil']}}/>
                    <ContactCard data={{title:'Unit Administrator:',content:['Telephone: 925-875-4433','Email: guillermo.h.garcia.civ@mail.mil']}}/>
                </div>
                <p className='text-bright aln-c' id='copyright'>Copyright © 191st Army Band, All rights reserved.</p>
            </div>
        )
    }
}

export default Contact;