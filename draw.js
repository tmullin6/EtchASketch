const canvas = document.querySelector('.draw-area');
const reset= document.querySelector('#reset');
const resize = document.querySelector("#resize")

 
drawCanvas();




resize.addEventListener("click", () => {

    let size = Number.parseInt(prompt("Enter how many squares per side you would like? \n(Max value: 100 Min value: 10)"));


    while (!Number.isInteger(size)) {

        alert("Please only enter a number");
        size = Number.parseInt(prompt("Enter how many squares per side you would like? \n (Max value: 100 Min value: 10)"));

    }

    while(size<10) {
        alert("Please enter a number greater than 10");
        size = Number.parseInt(prompt("Enter how many squares per side you would like? \n(Max value: 100 Min value: 10)"));
    }

     while (size > 100) {

            alert("Please enter a number smaller than 100");
            size = Number.parseInt(prompt("Enter how many squares per side you would like? \n(Max value: 100)"));
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

        reset.addEventListener("click", () => {

            div.classList.remove("div-hover");
        
        });
    }

    
   

}

function removeCanvas() {

    while(canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}


