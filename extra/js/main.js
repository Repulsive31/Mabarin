function changeImage(divWrapper) {
    // Assuming you have images named kompetitif.jpg, duo.jpg, team.jpg, etc.
    // Adjust the path and filenames accordingly
    const imagePath = `images/${darkConfirmed}.svg`;
    
    // Change the image source based on the mode
    document.getElementById('divWrapper-image').src = imagePath;
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}