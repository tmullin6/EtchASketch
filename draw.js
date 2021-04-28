const canvas = document.querySelector('.draw-area');
const reset= document.querySelector('#reset');
const resize = document.querySelector("#resize")

 
drawCanvas();


reset.addEventListener("click", () => {

    canvas.childNodes.classList.remove("div-hover")

});

resize.addEventListener("click", () => {

    let size = Number.parseInt(prompt("How big would you like your canvas? (Max value: 100)"));

     while (size > 100) {
        alert("Please enter a number smaller than 100");
        size = Number.parseInt(prompt("How big would you like your canvas? (Max value: 100)"));
    }

    removeCanvas();
    drawCanvas(size);
});






function drawCanvas(size=16) {

    let divDimensions = (400-(size*2))/size;

    for (let i =1; i<=(size**2); i++) {
        const div = document.createElement("div");
        div.classList.add("square-div");

        div.setAttribute("style", `float:right; height: ${divDimensions}px; width: ${divDimensions}px; border-style: solid; border-width: 1px; border-color: rgb(26,25,25)`);
        
        canvas.appendChild(div);

        div.addEventListener("mouseenter", () => {

            div.classList.add("div-hover");
    
        });
    }

   

}

function removeCanvas() {

    while(canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}


