const modal = document.getElementById('modal')

const SCRIPT = '<script src="i-common.js" id="ar:ic-config" data-ar:ic-sec="your_HTML_section"></script>'
const DIV = '<div id="ar:ic-target"></div>'

const openModal = () => modal.style.display = 'block'
const closeModal = () => {
    modal.style.display = 'none'
    modalHTML.style.display = 'none'
    modalScript.style.display = 'none'
}
/* This function copy to the user clipboard the code that he wants to use in his code */

function copyCode(element){
    navigator.clipboard.writeText(`${element}`);
    alert(`Text copied with sucess: ${element}`)
}

const modalContent = document.getElementById('modalContent')

const modalHTML = document.getElementById('modalHTML')

const modalScript = document.getElementById('modalScript')

function showHTML(){
    modalHTML.style.display = 'block'
}
function showScript(){
    modalScript.style.display = 'block'
}