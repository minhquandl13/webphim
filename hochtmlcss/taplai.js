const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i)=>{
    const itemNumer = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click",()=>{
        const ratio = Math.floor(window.innerWidth/270); 
        clickCounter++;
        if(itemNumer - (4+clickCounter) >= 0){  // if(itemNumer - (4+clickCounter)+(4-ratio) >= 0){
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value 
            -300}px)`;
        }else{
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });

    console.log(movieLists[i].querySelectorAll("img").length);
});

console.log(Math.floor(window.innerWidth / 270))

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.profile-text-container,.toggle,.menu-list-container,.text-box,.input"
);

ball.addEventListener("click", () => {
    items.forEach((item) =>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active");
})

window.addEventListener("load", function (){
    const slider = document.querySelector(".movie-list-wrapper-top");
    const sliderMain = document.querySelector(".list");
    const sliderItem = document.querySelectorAll(".featured-content");
    const nextBtn = document.querySelector(".arrowright");
    const prevBtn = document.querySelector(".arrowleft");
    const sliderItemWidth = sliderItem[0].offsetWidth;
    const slidesLength = sliderItem.length;
    let positionX = 0;
    let index = 0;
    nextBtn.addEventListener("click", function(){
        handlechangeSlide(1);
    });
    prevBtn.addEventListener("click", function(){
        handlechangeSlide(-1);
    });


    function handlechangeSlide(direction){
        if(direction === 1){
            if(index >= slidesLength - 1 ) {
                index = slidesLength - 1;
                return;
            }
            positionX = positionX - sliderItemWidth;
            console.log("handlechangeSlide ~ positionX", positionX);
            sliderMain.style = `transform: translateX(${positionX}px)`;
            index++;
        } else if(direction === -1){
            if(index <= 0) {
                index = 0;
                return;
            }
            positionX = positionX + sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            index--;
        }
    }
})


window.addEventListener("load", function (){
    const slider = document.querySelector(".movie-list-wrapper-top1");
    const sliderMain = document.querySelector(".list1");
    const sliderItem = document.querySelectorAll(".featured-content1");
    const nextBtn = document.querySelector(".arrowright1");
    const prevBtn = document.querySelector(".arrowleft1");
    const sliderItemWidth = sliderItem[0].offsetWidth;
    const slidesLength = sliderItem.length;
    let positionX = 0;
    let index = 0;
    nextBtn.addEventListener("click", function(){
        handlechangeSlide(1);
    });
    prevBtn.addEventListener("click", function(){
        handlechangeSlide(-1);
    });


    function handlechangeSlide(direction){
        if(direction == 1){
            if(index >= slidesLength - 1 ) {
                index = slidesLength - 1;
                return;
            }
            positionX = positionX - sliderItemWidth;
            console.log("handlechangeSlide ~ positionX", positionX);
            sliderMain.style = `transform: translateX(${positionX}px)`;
            index++;
        } else if(direction == -1){
            if(index <= 0) {
                index = 0;
                return;
            }
            positionX = positionX + sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            index--;
        }
    }
})

window.addEventListener("load", function (){
    const slider = document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider-main");
    const sliderItem = document.querySelectorAll(".slider-item");
    const nextBtn = document.querySelector(".slider-next");
    const prevBtn = document.querySelector(".slider-prev");
    const sliderItemWidth = sliderItem[0].offsetWidth;
    const slidesLength = sliderItem.length;
    let positionX = 0;
    let index = 0;
    nextBtn.addEventListener("click", function(){
        handlechangeSlide(1);
    });
    prevBtn.addEventListener("click", function(){
        handlechangeSlide(-1);
    });


    function handlechangeSlide(direction){
        if(direction == 1){
            if(index >= slidesLength - 1 ) {
                index = slidesLength - 1;
                return;
            }
            positionX = positionX - sliderItemWidth;
            console.log("handlechangeSlide ~ positionX", positionX);
            sliderMain.style = `transform: translateX(${positionX}px)`;
            index++;
        } else if(direction == -1){
            if(index <= 0) {
                index = 0;
                return;
            }
            positionX = positionX + sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            index--;
        }
    }
})








