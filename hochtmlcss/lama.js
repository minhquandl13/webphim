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

window.addEventListener("load", function (){
    const slider = document.querySelector(".slider1");
    const sliderMain = document.querySelector(".slider-main1");
    const sliderItem = document.querySelectorAll(".slider-item1");
    const nextBtn = document.querySelector(".slider-next1");
    const prevBtn = document.querySelector(".slider-prev1");
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