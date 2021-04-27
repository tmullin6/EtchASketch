const canvas = document.querySelector('.draw-area');
const reset= document.querySelector('#reset');
const resize = document.querySelector("#resize");

drawCanvas();

reset.addEventListener("click", () => {

    window.location.reload(false);

});

resize.addEventListener("click", () => {

    let size = Number.parseInt(prompt("What size canvas would you like?"));

     if (size > 100) {
        error("Please enter a number smaller than 100");
    }

    drawCanvas(size);
});

function drawCanvas(size=16) {

    for (let i =1; i<=(size**2); i++) {
        const div = document.createElement("div");
        div.classList.add("square-div");
        console.log(div);
        canvas.appendChild(div);

        div.addEventListener("mouseenter", () => {

            div.classList.add("div-hover");
    
        });
        }

   

}




