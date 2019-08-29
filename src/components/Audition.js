import React from 'react';
import TextInput from './TextInput';
import RadioInput from './RadioInput';
import {exitModalBtn} from '../util/'
import SelectInput from './SelectInput';
import SectionText from './SectionText';
import axios from 'axios';

class Audition extends React.Component{
    // send off to php service with state object
    state={
        name:null,
        email:null,
        phone:null,
        city:null,
        state:null,
        age:null,
        instrument:null
    }

    changeStateVal = (key, val) =>{
        this.setState({
            ...this.state,
            [key]:val
        })
    }

    componentDidMount(){
        document.querySelector('.audition-container .btn-primary').addEventListener('click',e=>{
            document.querySelector('.audition-modal').classList.remove('hidden');
        });

        // submit listener
        document.querySelector('.audition-form #submit-input').addEventListener('click',e=>{
            e.preventDefault();
            axios.post('/service/auditionSubmit.php', this.state)
                .then(res=>{console.log(res)})
                .catch(err=>{console.log(err)})
        });
    }

    render(){
        return(
            <div className='audition-container modal-container'>
                <SectionText data={{
                    title:'Audition',
                    content:"The first step to joining the Army Music Program is the audition. Fill out the form below if you are interested in auditioning for the Army Music Program. Voluntary information shared with the U.S. Army Music Program will not be shared with any other party and will be used for audition purposes only."    
                }}/>
                <img className='img-dynamic' src='https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/67386995_2858007840937101_2557878252853002240_o.jpg?_nc_cat=102&_nc_oc=AQndPnZy0-EQdf0wwtIEdOt4hhCLog6OQnqO-aUx3fA9Apu7ht8PB3bgrKlocgnFXkPXKj6YU6riUM0hMNn7oJAk&_nc_ht=scontent-sjc3-1.xx&oh=e401a50e9bc080c105d9416b482ddcaa&oe=5E15B083' alt='audition' />
                <div className='btn-primary' onClick={this.showForm}>
                    Apply for Audition
                </div>
                <div className='audition-modal hidden'>
                    <form className='audition-form'>
                        <i className='exit-button material-icons' onClick={exitModalBtn}>close</i>
                        <TextInput data={{id:'name-input',type:'text', required:true, name:'name',changeStateVal:this.changeStateVal}} />
                        <TextInput data={{id:'email-input',type:'email', required:true, name:'email',changeStateVal:this.changeStateVal}} />
                        <TextInput data={{id:'phone-input',type:'tel', name:'phone',changeStateVal:this.changeStateVal}} />
                        <TextInput data={{id:'city-input',type:'text', name:'city',changeStateVal:this.changeStateVal}} />
                        <TextInput data={{id:'state-input',type:'text', name:'state',changeStateVal:this.changeStateVal}} />
                        <p>Are you older than 35 years of age?</p>
                        <RadioInput data={{options:['yes', 'no'], name:'age',id:'age',changeStateVal:this.changeStateVal,required:true}} />
                        <p>What is your primary Instrument?</p>
                        <SelectInput data={{
                            changeStateVal:this.changeStateVal,
                            name:'instrument',
                            id:'instrument',
                            required:true,
                            options:['keyboard','trumpet','saxophone','french horn','sousaphone','tuba','flute','picolo','oboe','bagpipes','guitar','bass guitar','Euphonium','percussion','trombone','vocal','clarinet','basson','audio engineer'],
                            changeStateVal:this.changeStateVal
                        }}/>
                        <TextInput data={{id:'submit-input', type:'submit', name:'submit'}} />
                        <button onClick={(e)=>{
                            e.preventDefault();
                            console.log(Object.values(this.state));
                        }}>check</button>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default Audition;