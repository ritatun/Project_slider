const linkAdmiral = document.querySelector(".admiral");
const linkThieves = document.querySelector(".thieves");
const linkPatriotic = document.querySelector(".patriotic");

const leftArrow = document.querySelector(".left-arrow__button");
const rightArrow = document.querySelector(".right-arrow__button");

const imageDiv = document.querySelectorAll(".image");
const circles = document.querySelector(".circles");

const firstCircle = document.querySelector(".item-1");
const secondCircle = document.querySelector(".item-2");
const thirdCircle = document.querySelector(".item-3");


function sliderFunc () {

    function moveLeft() {
        let prevImage;
        let presentImage = document.querySelector(".activeImage");
        let activeCircle = document.querySelector(".active-circle");

        if (presentImage.classList.contains("image-1")) {
            prevImage = document.querySelector(`.image-${imageDiv.length}`);
            prevCircle = document.querySelector(`.item-${imageDiv.length}`);
        } else {
            prevImage = presentImage.previousElementSibling;
            console.log(prevImage)
            prevCircle = activeCircle.previousElementSibling;
            console.log(prevCircle)
        }
        presentImage.classList.remove("activeImage")
        activeCircle.classList.remove("active-circle")
        prevImage.classList.add("activeImage")
        prevCircle.classList.add("active-circle")
    }

    function moveRight() {
        let nextImage;
        let presentImage = document.querySelector(".activeImage");
        let activeCircle = document.querySelector(".active-circle");

        if (presentImage.classList.contains(`image-${imageDiv.length}`)) {
            nextImage = document.querySelector(".image-1");
            nextCircle = document.querySelector(`.item-1`);
        } else {
            nextImage = presentImage.nextElementSibling;
            nextCircle = activeCircle.nextElementSibling;
        }
        presentImage.classList.remove("activeImage")
        activeCircle.classList.remove("active-circle") 
        nextImage.classList.add("activeImage")
        nextCircle.classList.add("active-circle")
    }

    function showImg() {
        console.log("вход", this.dataset.city)
        let presentImage = document.querySelector(".activeImage");
        presentImage.classList.remove("activeImage")

        let activeCircle = document.querySelector(".active-circle");
        activeCircle.classList.remove("active-circle")

        let imagesAll = document.querySelectorAll(".image");
        imagesAll.forEach(img => {
            if (img.dataset.city === this.dataset.city) {
                console.log("yes", img.dataset.city)
                img.classList.add("activeImage")
                let futureCircle = circles.querySelector(`[data-city="${this.dataset.city}"]`);
                console.log("futureCircle", futureCircle)
                futureCircle.classList.add("active-circle")
                } 
        })
    }

    linkThieves.addEventListener("click", showImg)
    linkPatriotic.addEventListener("click", showImg)
    linkAdmiral.addEventListener("click", showImg)

    leftArrow.addEventListener("click", moveLeft)
    rightArrow.addEventListener("click", moveRight)

    firstCircle.addEventListener("click", showImg)
    secondCircle.addEventListener("click", showImg)
    thirdCircle.addEventListener("click", showImg)
}

window.addEventListener("load", sliderFunc)