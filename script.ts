

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

  /*Hundefutter*/

  let dogfood: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("ikra1") as HTMLCollectionOf<HTMLElement>;
  let dogfood2: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("ikra2") as HTMLCollectionOf<HTMLElement>;
  let dogfood3: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("ikra3") as HTMLCollectionOf<HTMLElement>;
  let dogfood4: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("ikra4") as HTMLCollectionOf<HTMLElement>;
  let dogfood5: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("ikra5") as HTMLCollectionOf<HTMLElement>;
  let dogfood6: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("ikra6") as HTMLCollectionOf<HTMLElement>;


  /*Scrollsection*/
  
  let horizontalSection1 = document.getElementById("horizontalSection1");
  let windowWidth = window.innerWidth;
  let horizonzalLength =
  document.querySelector(".element-wrapper").scrollWidth;

  let distFromTop = horizontalSection1.getBoundingClientRect().top;

  let scrollDistance = distFromTop + horizonzalLength - windowWidth;

  let horizontalSection = document.getElementsByClassName("horizontal-section") as HTMLCollectionOf<HTMLElement>;
  let elementWrapper = document.getElementsByClassName("element-wrapper") as HTMLCollectionOf<HTMLElement>;

  horizontalSection[0].style.height =  `${horizonzalLength}px`;

  window.onscroll = function () {
    let scrollTop = window.pageYOffset;

    if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
      elementWrapper[0].style.transform = "translateX(-" + (scrollTop - distFromTop) + "px)";
    }

    let posIkra: number = -window.scrollY / 4;
    dogfood[0].style.top =  `${posIkra}px`;
    let posIkra2: number = -window.scrollY / 1.5;
    dogfood2[0].style.top =  `${posIkra2}px`;
    let posIkra3: number = -window.scrollY / 2;
    dogfood3[0].style.top =  `${posIkra3}px`;
    let posIkra4: number = -window.scrollY / 1.75;
    dogfood4[0].style.top =  `${posIkra4}px`;
    let posIkra5: number = -window.scrollY / 2;
    dogfood5[0].style.top =  `${posIkra5}px`;
    let posIkra6: number = -window.scrollY / 1.75;
    dogfood6[0].style.top =  `${posIkra6}px`;
  };

  

  let imgScroll = document.getElementById("FadeLachs");
  let imgScroll2 = document.getElementById("FadeKartoffel");
  let imgScroll3 = document.getElementById("FadeKarotte");
  let imgScroll4 = document.getElementById("FadeOel");



  let fadeInView = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio <= 0 === false ) { // Wenn in viewport
      imgScroll.classList.add("scrollFadeIn");
      imgScroll2.classList.add("scrollFadeIn2");
      imgScroll3.classList.add("scrollFadeIn3");
      imgScroll4.classList.add("scrollFadeIn4");

    } 
  });

  fadeInView.observe(imgScroll);
  fadeInView.observe(imgScroll3);
  fadeInView.observe(imgScroll4);
  fadeInView.observe(imgScroll4);
  
  
  let buyImg = document.getElementById("buyImg");
  let stoerer = document.getElementById("stoerer");
  let angebotFade = document.getElementById("angebotFade");
  let gesundheitImg = document.getElementById("gesunfheit-img");
  let siegelFade = document.getElementById("siegelFade");


  let fadeIn = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio <= 0 === false ) { // Wenn in viewport
      buyImg.classList.add("fadeInLeft");
      angebotFade.classList.add("fadeInRight");
      stoerer.classList.add("stoererFade");
  
    } 
  });

  let fadeGesundheit = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio <= 0 === false ) { // Wenn in viewport
      gesundheitImg.classList.add("fadeInRight");

    } 
  });
 
  let fadeInSiegel = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio <= 0 === false ) { // Wenn in viewport
      siegelFade.classList.add("fadeUpSiegel");

    } 
  });
  fadeIn.observe(buyImg);
  fadeIn.observe(stoerer);
  fadeIn.observe(angebotFade);
  fadeGesundheit.observe(gesundheitImg);
  fadeInSiegel.observe(siegelFade);






  



  let divAnimateLeft = document.getElementById("fadeInFirst");
  let divAnimateRight = document.getElementById("fadeInThird");

  let hideWhenBoxInView = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio <= 0 === false) { // Wenn in viewport
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
  

/*Footer*/ 

let footerDeckel = document.getElementById("footerDeckel");

  let fadeDeckelWhenInView = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio <= 0 === false) { // Wenn in viewport
      footerDeckel.classList.add("deckelFadeIn");
      
    } 
  });

  fadeDeckelWhenInView.observe(footerDeckel);


}