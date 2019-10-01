window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visuals = document.querySelector('.visuals');
    const colors = [
        "#181515", 
        "#ac3131",
        "#73921d",
        "#02a6ac",
        "#f8ba0f",
        "#7c0e9e"
    ];

pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
        sounds[index].currentTime = 0;
        sounds[index].play();

        createBubbles(index);
    });
}); 

//create a function for bubbles
const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visuals.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease-out";
    bubble.addEventListener("animationend", function(){
        visuals.removeChild(this);
    })
};
});