const img = document.querySelector("img");
img.setAttribute("draggable", false);

// Function to play or pause the background music
function playAudio(){
    let audio = document.getElementById("music");

    if(audio.paused){
        audio.play();
    } else {
        audio.pause();
    }
}

// Below is to create the back to top function:
// When user scroll beyond 800px on the page, the button will appear on screen
// When they scroll back (before the 500px line), the button will fade away
window.onscroll = function(){
    scroll();
}

// Function to show the "BACK TO TOP" button when user scroll down the screen
function scroll() {
    let toTop = document.getElementById("backToTop");

    // To create a smooth transition by changing opacity (transition used in css)
    // For most type of browsers, when scroll 500px, "BACK TO TOP" button appear
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        toTop.style.opacity = "1"; // button appear
        toTop.style.pointerEvents = "auto"; // to allow user click on the button
    } else {
        toTop.style.opacity = "0"; // button fade away
        toTop.style.pointerEvents = "none"; // to avoid user click on the button
    }
}

// Actual function to bring the screen back to top
function backToTop() {
    // smooth scroll to top
    window.scrollTo({top: 0, behavior: 'smooth'});
}

