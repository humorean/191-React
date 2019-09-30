import React from 'react';
import axios from 'axios';
import SectionText from './SectionText';
import Video from './Video';
import History from './History';

class Home extends React.Component{
    render(){
        return (
            <div className='home'>
                <SectionText data={{
                    title:"Mission Statement",
                    content: "The 191st Army Band takes pride in representing the United States Army and the 63rd Regional Support Command (RSC) to local communities of the San Francisco Bay Area. Through music we join our fellow Army Bands in providing support to troops, instilling in our Soldiers the will to fight and win, fostering the support of our citizens, and promoting our national interests.  ",
                    anchorText:"Learn More...",
                    anchorLink: "#history"
                }}/>
                <img className='img-dynamic' src='https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/47470991_2322569987814225_251635287694770176_n.jpg?_nc_cat=100&_nc_oc=AQnbDhIaeWgZah_DaWnbRtDD6zX-p4TFuNSXbxM1ZQXUhiduX-e66LOaZCcmsAz9vSQM20qjomqb94SMchDjqOeT&_nc_ht=scontent-sjc3-1.xx&oh=279512205d3284d4398279be52954691&oe=5E154F54' alt='home-img'></img>
                <SectionText data={{
                    title: "Vision Statement",
                    content: "To be the premiere band of the US Army Reserves, for the military and civilian community."
                }} />
                <Video url='https://www.youtube.com/embed/8OQQ0aZA46I'/>
               <History />
                <a href="https://www.facebook.com/pg/The-191st-Army-Band-Band-of-the-Wild-West-109140929157153/events/?ref=page_internal">Upcoming Events</a>
            </div>
        )
    }
}

export default Home;