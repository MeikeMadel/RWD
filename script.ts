

namespace RWD {
  let grafikklein: HTMLElement = document.getElementById("kreis-grafik-klein");

  let grafikgross: HTMLElement = document.getElementById("kreis-grafik-groß");



  grafikklein.addEventListener("click", handleClickKlein);
  grafikgross.addEventListener("click", handleClickGross);

  function handleClickKlein(_event: Event): void {
    grafikklein.classList.add("aktiv");
    grafikgross.classList.remove("aktiv");
  }

  function handleClickGross(_event: Event): void {
    grafikgross.classList.add("aktiv");
    grafikklein.classList.remove("aktiv");
  }


  let divAnimateLeft = document.getElementById("fadeInFirst");
  let divAnimateRight = document.getElementById("fadeInThird");

  let hideWhenBoxInView = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio <= 0 === false) { // Wenn in viewport
      console.log("Jetzt");
      divAnimateLeft.classList.add("fadeInLeft");
      divAnimateRight.classList.add("fadeInRight");
      
    } 
  });

  hideWhenBoxInView.observe(divAnimateLeft);
  hideWhenBoxInView.observe(divAnimateRight);

  let secondHeading = document.getElementById("secondHeading");
  let firstText = document.getElementById("first-text");

  let fadeInWhenBoxInView = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio <= 0 === false) { // Wenn in viewport
      secondHeading.classList.add("headerFadeIn");
      firstText.classList.add("firstTextFadeIn"); 
    } 
  });

  fadeInWhenBoxInView.observe(secondHeading);

  let thirdHeading = document.getElementById("scrollheading");

  let fadeInWhenInView = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio <= 0 === false) { // Wenn in viewport
      thirdHeading.classList.add("scrollHeadingAnimation");
      
    } 
  });

  fadeInWhenInView.observe(thirdHeading);



  /*Testimonials*/

  let buttonLeft = document.getElementById("button-left");
  buttonLeft.addEventListener("click", slideLeft);
  let buttonRight = document.getElementById("button-right");
  buttonRight.addEventListener("click", slideRight);
  let pic1 = document.getElementById("pic1");
  let pic2 = document.getElementById("pic2");
  let pic3 = document.getElementById("pic3");
  let text1 = document.getElementById("text1");
  let text2 = document.getElementById("text2");
  let text3 = document.getElementById("text3");
  let counter = 1;
  console.log(counter);

  

  function slideLeft (_event: Event) {
    counter--;
    if (counter == 0) {
      pic1.setAttribute("class", "hidepic");
      text1.setAttribute("class", "hideText");
      pic3.setAttribute("class", "showpic");
      text3.setAttribute("class", "showText");
    }
    if (counter == 2) {
      pic3.setAttribute("class", "hidepic");
      text3.setAttribute("class", "hideText");
      pic2.setAttribute("class", "showpic");
      text2.setAttribute("class", "showText");
    }
    if (counter == 1) {
      pic2.setAttribute("class", "hidepic");
      text2.setAttribute("class", "hideText");
      pic1.setAttribute("class", "showpic");
      text1.setAttribute("class", "showText");
    }
    if (counter == -1 ) {
      pic3.setAttribute("class", "hidepic");
      text3.setAttribute("class", "hideText");
      pic2.setAttribute("class", "showpic");
      text2.setAttribute("class", "showText");
    }
    if (counter == -2 ) {
      pic2.setAttribute("class", "hidepic");
      text2.setAttribute("class", "hideText");
      pic1.setAttribute("class", "showpic");
      text1.setAttribute("class", "showText");
      counter = 1;
    }
    
    
  }

  function slideRight (_event: Event) {
    counter++;
    if (counter == 0) {
      pic2.setAttribute("class", "hidepic");
      text2.setAttribute("class", "hideText");
      pic3.setAttribute("class", "showpic");
      text3.setAttribute("class", "showText");
    }
    if (counter == 1) {
      pic3.setAttribute("class", "hidepic");
      text3.setAttribute("class", "hideText");
      pic1.setAttribute("class", "showpic");
      text1.setAttribute("class", "showText");
    }
    if (counter == 2) {
      pic1.setAttribute("class", "hidepic");
      text1.setAttribute("class", "hideText");
      pic2.setAttribute("class", "showpic");
      text2.setAttribute("class", "showText");
    }
    if (counter == 3) {
      pic2.setAttribute("class", "hidepic");
      text2.setAttribute("class", "hideText");
      pic3.setAttribute("class", "showpic");
      text3.setAttribute("class", "showText");
    }
    if (counter == 4 ) {
      pic3.setAttribute("class", "hidepic");
      text3.setAttribute("class", "hideText");
      pic1.setAttribute("class", "showpic");
      text1.setAttribute("class", "showText");
      counter = 1;
    }

  }

  let img1 = document.getElementsByClassName("img-1") as HTMLCollectionOf<HTMLElement>;
  let img2= document.getElementsByClassName("img-2") as HTMLCollectionOf<HTMLElement>;
  let img3 = document.getElementsByClassName("img-3") as HTMLCollectionOf<HTMLElement>;
  let img4 = document.getElementsByClassName("img-4") as HTMLCollectionOf<HTMLElement>;

  let dogfood: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("ikra1") as HTMLCollectionOf<HTMLElement>;
  let dogfood2: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("ikra2") as HTMLCollectionOf<HTMLElement>;
  let dogfood3: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("ikra3") as HTMLCollectionOf<HTMLElement>;
  let dogfood4: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("ikra4") as HTMLCollectionOf<HTMLElement>;
  let dogfood5: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("ikra5") as HTMLCollectionOf<HTMLElement>;


  
  
  window.onscroll = () => {
    let pos: number = window.scrollY * 3  - 2000;
    img1[0].style.right =  `${pos}px`;
    let pos2: number= window.scrollY * 3 - 2700;
    img2[0].style.right =  `${pos2}px`;
    let pos3: number = window.scrollY * 3 - 3400;
    img3[0].style.right =  `${pos3}px`;
    let pos4: number = window.scrollY * 3 - 4100;
    img4[0].style.right =  `${pos4}px`;

    let posIkra: number = -window.scrollY / 1.25;
    dogfood[0].style.top =  `${posIkra}px`;
    let posIkra2: number = -window.scrollY / 1.5;
    dogfood2[0].style.top =  `${posIkra2}px`;
    let posIkra3: number = -window.scrollY / 1.25;
    dogfood3[0].style.top =  `${posIkra3}px`;

  };

  let query = window.matchMedia("(min-width: 1200px)");
 
  
  window.addEventListener("resize", resizeWindow);

  function resizeWindow (_event: Event): boolean {
    if (query.matches) { 
      
      window.onscroll = () => {
      let posIkra: number = -window.scrollY * 1.25;
      dogfood[0].style.top =  `${posIkra}px`;
      let posIkra2: number = -window.scrollY / 1.5;
      dogfood2[0].style.top =  `${posIkra2}px`;
      let posIkra3: number = -window.scrollY / 1.25;
      dogfood3[0].style.top =  `${posIkra3}px`;
      let posIkra4: number = -window.scrollY / 1.75;
      dogfood4[0].style.top =  `${posIkra4}px`;
      let posIkra5: number = -window.scrollY / 2;
      dogfood5[0].style.top =  `${posIkra5}px`;
      };
    } 
    return(query.matches);
  }

  
  if (resizeWindow && query.matches) {
    window.onscroll = () => {
      let posIkra: number = -window.scrollY / 1.25;
      dogfood[0].style.top =  `${posIkra}px`;
      let posIkra2: number = -window.scrollY / 1.5;
      dogfood2[0].style.top =  `${posIkra2}px`;
      let posIkra3: number = -window.scrollY / 1.25;
      dogfood3[0].style.top =  `${posIkra3}px`;
      let posIkra4: number = -window.scrollY / 1.75;
      dogfood4[0].style.top =  `${posIkra4}px`;
      let posIkra5: number = -window.scrollY / 2;
      dogfood5[0].style.top =  `${posIkra5}px`;

      let pos: number = window.scrollY * 3  - 2000;
      img1[0].style.right =  `${pos}px`;
      let pos2: number = window.scrollY * 3 - 2700;
      img2[0].style.right =  `${pos2}px`;
      let pos3: number = window.scrollY * 3 - 3400;
      img3[0].style.right =  `${pos3}px`;
      let pos4: number = window.scrollY * 3 - 4100;
      img4[0].style.right =  `${pos4}px`;
      
      };
    }

  
  








  


 
   

 
/*
 window.addEventListener("scroll", handleEvent);
  window.addEventListener("load", handleEvent);
  window.addEventListener("resize", handleEvent);
  function handleEvent(_event: Event): void {
    
    if (document.querySelector("bg-static")) {
      let windowTop = window.scrollX;
      var element = bgstatic.getBoundingClientRect();
      let elementTop = element.top;
      console.log(element.top, element.right, element.bottom, element.left);
      let leftPosition = windowTop - elementTop;
      if (leftPosition > 1000) {
        let bgMove = document.getElementById("bg-move");
        bgMove.classList.add("leftPosition");
      }
      

    }
  }
  */
 

  /*Testimonials
  let buttonLeft = document.getElementById("display-left");
  buttonLeft.addEventListener("click", plusDivs(-1));
  let buttonRight = document.getElementById("display-right");
  buttonRight.addEventListener("click", plusDivs(1));

  let index: number = 1;
  showDivs(index);
  
  function plusDivs(event: Event, n: number): any {
    console.log("click");
    showDivs(index += n);
  }

  function showDivs(n: number) {
  let i: number = 0;
  var slides = new Array;
  slides[0] = document.getElementById("mySlides0");
  slides[1] = document.getElementById("mySlides1");
  console.log(slides);
  if (n > slides.length) {
    index = 1;
  } 
  if (n < 1) {
    index = slides.length;
  } 
  for (i = 0; i < slides.length; i++) {
    slides[i].setAttribute("class", "styleTest");
  }
  slides[index - 1].setAttribute("class", "styleTestBlock");
}
*/



}