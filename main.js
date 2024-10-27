var elements = document.getElementsByClassName("länkar")
elements[0].classList.add("active");

function bytafärg(siffra) {

    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("active");
    }
    
    elements[siffra].classList.add("active");

}
function handleSubmit() {

    setTimeout(() => {
        window.location.href = "tack.html";
    }, 2000); 
    
    return true;
}
function BytIframe(url) {
    document.getElementById('iframeA').src = url;
}
function tabortdropdown(){
    document.getElementById('knappmobil').checked = false;
}