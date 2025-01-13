document.getElementById("link").addEventListener("click", function(event) {
    event.preventDefault();

   let video = document.getElementById("video");

    if (video.style.display === "none" || video.style.display === "") {
        video.style.display = "block";
        video.play(); 
    }
});
