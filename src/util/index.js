
// capitalized first letter of each word:
export const capitalize_util = str=> str.split(' ').map(s=>{return (s[0].toUpperCase()+s.substring(1))}).join(' ');

export const convertBool = str=>{
    if(str.toLowerCase()==='yes'){
        return true;
    }else if(str.toLowerCase()==='no'){
        return false;
    }else{
        return str;
    }
}

// if user clicked anywhere in the modal container that is not the picture then hide modal
export const exitModalBtn=e=>{e.target.parentNode.parentNode.classList.add('hidden')};
