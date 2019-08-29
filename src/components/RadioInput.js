import React from 'react';
import {capitalize_util} from '../util/'

class RadioInput extends React.Component{
    state={
        opts:null
    };
    handleChange=(e)=>{
        this.props.data.changeStateVal(this.props.data.name, e.target.value)
    }
    componentDidMount(){
        const {name,id,options} = this.props.data;
        this.setState({opts: options.map(opt=>{
            return (
                <div className='radio-div' key={opt}>
                    <input type='radio' id={id+'-'+opt} name={name} value={opt} onChange={this.handleChange}></input>
                    <label htmlFor={id+'-'+opt}>{capitalize_util(opt)}</label>
                </div> 
            )
        })});
    }
    render(){
        return (
            <div className='radio-group'>
                {this.state.opts}
            </div>
        )
    }
}

export default RadioInput;