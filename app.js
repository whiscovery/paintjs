const canvas = document.getElementById("jsCanvas");

function onMouseMove(event){
    console.log(event);
}

canvas.addEventListener("mousemove",onMouseMove);