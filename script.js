let image = document.getElementById("image");

let images = ["images/n1.jpg","images/n2.jpg","images/n3.jpg","images/n9.jpg"] ;

setInterval
(
    function()
{
    let random = Math.floor(Math.random()*4)
    image.src = images[random];
}   ,800
);
let i =getElementById("image").style.backgroundSize="cover";
document.write(i);
