import React from 'react';
import {capitalize_util} from '../util/'

class SelectInput extends React.Component{
    state={
        opts:null
    };
    handleChange= e =>{
        this.props.data.changeStateVal(this.props.data.name, e.target.value);
    }
    componentDidMount(){
        const {options} = this.props.data;
        this.setState({opts: options.map(opt=>{
            return (
                <option value={opt} key={opt}>
                    {capitalize_util(opt)}
                </option>
            )
        })});
    }
    render(){
        return (
            <select className='select-group' onChange={this.handleChange}>
                <option disabled selected value> -- select an instrument -- </option>
                {this.state.opts}
            </select>
        )
    }
}
export default SelectInput;