import React from 'react';
import {exitModalBtn} from '../util/'

class ImageModal extends React.Component {

    prevPicture = e =>{
        this.props.prevImage();
    }

    nextPicture = e =>{
        this.props.nextImage();
    }

    componentDidMount(){
        // click anywhere besides picture will exit out overlay
        document.querySelector('.image-modal-container').addEventListener('click',(e)=>{
            if(!e.target.className.includes('modal-image-content')){
                document.querySelector('.image-modal-container').classList.add('hidden');
            }
        })
    }

    render(){
        return(
            <div className='image-modal-container hidden'>
                <div className='image-modal'>
                    <i className='exit-button material-icons' onClick={exitModalBtn}>close</i>
                    <img className='modal-image-content' src={this.props.url} alt={this.props.description}/>
                    <i className='modal-image-content material-icons left-nav' onClick={this.prevPicture}>navigate_before</i>
                    <i className='modal-image-content material-icons right-nav' onClick={this.nextPicture}>navigate_next</i>
                </div>
            </div>
            
        )
    }
}

export default ImageModal;