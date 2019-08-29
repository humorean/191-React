import React from 'react';
import axios from 'axios';
import ImageModal from './ImageModal';

class Gallery extends React.Component{
    state = {
        images:null,
        currentUrl:null,
        currentElement:null
    }
    //When user click on image open image viewer with image_url_normal
    openImage = (url,target)=>{
        this.setState({currentUrl:url});
        this.setState({currentElement:target.parentNode});
        document.querySelector('.image-modal-container').classList.remove('hidden');
    }

    // pass these two functions to child component as props
    prevImage = () =>{
        let preElement = this.state.currentElement.previousSibling?
        this.state.currentElement.previousSibling:this.state.currentElement.parentNode.lastChild;
        this.setState({currentUrl:preElement.firstChild.getAttribute('data-src')});
        this.setState({currentElement:preElement});
    }

    nextImage = () =>{
        let nextElement = this.state.currentElement.nextSibling?
        this.state.currentElement.nextSibling:this.state.currentElement.parentNode.firstChild;
        this.setState({currentUrl:nextElement.firstChild.getAttribute('data-src')});
        this.setState({currentElement:nextElement});
    }

    async componentDidMount(){
        const res = await axios.get('/service/getImages.php');
        this.setState({images: res.data.map(({image_id, image_url_normal, image_description,image_url_thumb})=>{
            return (
                <div key={image_id} className='image-frame' onClick={(event)=>{this.openImage(image_url_normal,event.target)}}>
                    <img src={image_url_thumb} alt={image_description} data-src={image_url_normal}></img>
                </div>
            )
        })});
    }
    render(){
        return(
            <div className='gallery'>
                <div className='image-grid'>
                    {this.state.images}
                </div>
                <ImageModal url={this.state.currentUrl} nextImage={this.nextImage} prevImage={this.prevImage} />
            </div>
        )
    }
}

export default Gallery;