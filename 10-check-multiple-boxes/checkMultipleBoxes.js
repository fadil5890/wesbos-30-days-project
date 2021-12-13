const checkboxes = document.querySelectorAll('input[type="checkbox"]')
let lastChecked;

function clickEvent(e){
    let inBetween = false;
    if(e.shiftKey && this.checked){
        checkboxes.forEach(elem => {
            console.log(elem)
            console.log(this)
            if(elem === this || elem === lastChecked){
                inBetween = !inBetween;
                console.log('start inBetween');
            }

            if(inBetween){
                elem.checked = true;
            }
        });
    };

    lastChecked = this;
}


checkboxes.forEach(elem => elem.addEventListener('click',clickEvent));