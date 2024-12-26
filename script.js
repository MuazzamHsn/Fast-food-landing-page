const likes = document.querySelectorAll(".like");

likes.forEach((like)=>{
    like.addEventListener("click", clicked);
});

function clicked(event){
    const image = event.target;
    const currentsrc = image.getAttribute("src");

    if(currentsrc == "Images/not liked.png"){
        image.src= "Images/liked.png";
        console.log("Image Liked");
    }
    else{
        image.src="Images/not liked.png";
        console.log("Image Unliked");
    }
}
