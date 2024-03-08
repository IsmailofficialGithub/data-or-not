let no = document.querySelector(".no");



let move = () => {
    var width= window.innerWidth;
    var heigth= window.innerHeight;
   


    var x = Math.random() * heigth-20;
    var y = Math.random() * width-20;

console.log(x)
console.log(y)


   
    no.style.top = `${x}px`;
    no.style.right = `${y}px`;


}

no.onmouseover = () => {
    move();
}

no.onclick = () => {
    move();
}




