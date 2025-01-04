const imgPaths = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg"];
let activeIndex = 0;

const imgDisplay = document.getElementById("imgDisplay");
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");

function updateGallery() {
    imgDisplay.src = imgPaths[activeIndex];
    arrowLeft.style.visibility = activeIndex === 0 ? "hidden" : "visible";
    arrowRight.style.visibility = activeIndex === imgPaths.length - 1 ? "hidden" : "visible";
}


arrowLeft.addEventListener("click", () => {
    if (activeIndex > 0) activeIndex--;
    updateGallery();
});


arrowRight.addEventListener("click", () => {
    if (activeIndex < imgPaths.length - 1) activeIndex++;
    updateGallery();
});


updateGallery();
