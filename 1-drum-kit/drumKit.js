function playSound(e){
    const audioType = document.querySelector(`audio[data-key='${e.keyCode}']`)
    const keyType = document.querySelector(`.key[data-key='${e.keyCode}']`)

    if(!audioType) return; // disabling the function to start
    audioType.currentTime = 0; // rewind to the start
    audioType.play();
    keyType.classList.toggle('playing');
}

function playSoundClick(e){
    const audioClick = document.querySelector(`audio[data-key='${e.path[1].dataset.key}']`);
    const keyClick = document.querySelector(`.key[data-key='${e.path[1].dataset.key}']`)

    if(!audioClick) return; // disabling the function to start
    audioClick.currentTime = 0; // rewind to the start
    audioClick.play();
    keyClick.classList.toggle('playing');

}

function transitionEnd(e){
    if(e.propertyName !== "transform") return; // skip it if its not transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll(".key")
keys.forEach(key => key.addEventListener("transitionend",transitionEnd))

window.addEventListener("keydown", playSound)

window.addEventListener("click", playSoundClick)



