let fullscreenbox;

function zoom_image(event)
{
    let clone = event.target.cloneNode();
    clone.className = "";

    fullscreenbox.innerHTML = "";
    fullscreenbox.appendChild(clone);
    fullscreenbox.className = "show";
}

function truc()
{
    fullscreenbox.className = "";
}



window.onload = () =>
{    
    let all_img = document.getElementsByClassName("zoom");
    fullscreenbox = document.getElementById("fullscreen-box");

    for (var img of all_img)
    {
        img.addEventListener("click", zoom_image)
    }
    fullscreenbox.addEventListener("click", truc);
}