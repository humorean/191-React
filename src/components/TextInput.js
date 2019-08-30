import React from 'react';
import {capitalize_util} from '../util/'

class TextInput extends React.Component{
    componentDidMount(){
        const {required,id,type} = this.props.data;
        if(required && type!=='submit'){
            document.getElementById(id).required=true;
            document.getElementById(id).previousSibling.classList.add('required');
        }
    }

    handleChange= e =>{
        this.props.data.changeStateVal(this.props.data.name, e.target.value);
    }
    render(){
        const {name,id,type,value,pClass} = this.props.data;
        const label = type==='submit'?'':<label htmlFor={id}>{capitalize_util(name)}:</label>
        const cls = pClass?`text-input ${pClass}`:'text-input';
        return (
            <div className={cls}>
                {label}
                <input type={type} placeholder={name} id={id} value={value} onChange={this.handleChange}></input>
            </div>
        )
    }
}

export default TextInput;