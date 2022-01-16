"use strict";
var RWD;
(function (RWD) {
    let grafikklein = document.getElementById("kreis-grafik-klein");
    let grafikgross = document.getElementById("kreis-grafik-groß");
    grafikklein.addEventListener("click", handleClickKlein);
    grafikgross.addEventListener("click", handleClickGross);
    function handleClickKlein(_event) {
        grafikklein.classList.add("aktiv");
        grafikgross.classList.remove("aktiv");
    }
    function handleClickGross(_event) {
        grafikgross.classList.add("aktiv");
        grafikklein.classList.remove("aktiv");
    }
    /*Hundefutter*/
    let dogfood = document.getElementsByClassName("ikra1");
    let dogfood2 = document.getElementsByClassName("ikra2");
    let dogfood3 = document.getElementsByClassName("ikra3");
    let dogfood4 = document.getElementsByClassName("ikra4");
    let dogfood5 = document.getElementsByClassName("ikra5");
    let dogfood6 = document.getElementsByClassName("ikra6");
    /*Scrollsection*/
    let horizontalSection1 = document.getElementById("horizontalSection1");
    let windowWidth = window.innerWidth;
    let horizonzalLength = document.querySelector(".element-wrapper").scrollWidth;
    let distFromTop = horizontalSection1.getBoundingClientRect().top;
    let scrollDistance = distFromTop + horizonzalLength - windowWidth;
    let horizontalSection = document.getElementsByClassName("horizontal-section");
    let elementWrapper = document.getElementsByClassName("element-wrapper");
    horizontalSection[0].style.height = `${horizonzalLength}px`;
    window.onscroll = function () {
        let scrollTop = window.pageYOffset;
        if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
            elementWrapper[0].style.transform = "translateX(-" + (scrollTop - distFromTop) + "px)";
        }
        let posIkra = -window.scrollY / 4;
        dogfood[0].style.top = `${posIkra}px`;
        let posIkra2 = -window.scrollY / 1.5;
        dogfood2[0].style.top = `${posIkra2}px`;
        let posIkra3 = -window.scrollY / 2;
        dogfood3[0].style.top = `${posIkra3}px`;
        let posIkra4 = -window.scrollY / 1.75;
        dogfood4[0].style.top = `${posIkra4}px`;
        let posIkra5 = -window.scrollY / 2;
        dogfood5[0].style.top = `${posIkra5}px`;
        let posIkra6 = -window.scrollY / 1.75;
        dogfood6[0].style.top = `${posIkra6}px`;
    };
    let imgScroll = document.getElementById("FadeLachs");
    let imgScroll2 = document.getElementById("FadeKartoffel");
    let imgScroll3 = document.getElementById("FadeKarotte");
    let imgScroll4 = document.getElementById("FadeOel");
    let fadeInView = new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio <= 0 === false) { // Wenn in viewport
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
        if (entries[0].intersectionRatio <= 0 === false) { // Wenn in viewport
            buyImg.classList.add("fadeInLeft");
            angebotFade.classList.add("fadeInRight");
            stoerer.classList.add("stoererFade");
        }
    });
    let fadeGesundheit = new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio <= 0 === false) { // Wenn in viewport
            gesundheitImg.classList.add("fadeInRight");
        }
    });
    let fadeInSiegel = new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio <= 0 === false) { // Wenn in viewport
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
    function slideLeft(_event) {
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
        if (counter == -1) {
            pic3.setAttribute("class", "hidepic");
            text3.setAttribute("class", "hideText");
            pic2.setAttribute("class", "showpic");
            text2.setAttribute("class", "showText");
        }
        if (counter == -2) {
            pic2.setAttribute("class", "hidepic");
            text2.setAttribute("class", "hideText");
            pic1.setAttribute("class", "showpic");
            text1.setAttribute("class", "showText");
            counter = 1;
        }
    }
    function slideRight(_event) {
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
        if (counter == 4) {
            pic3.setAttribute("class", "hidepic");
            text3.setAttribute("class", "hideText");
            pic1.setAttribute("class", "showpic");
            text1.setAttribute("class", "showText");
            counter = 1;
        }
    }
    /*
      let img1 = document.getElementsByClassName("img-1") as HTMLCollectionOf<HTMLElement>;
      let img2= document.getElementsByClassName("img-2") as HTMLCollectionOf<HTMLElement>;
      let img3 = document.getElementsByClassName("img-3") as HTMLCollectionOf<HTMLElement>;
      let img4 = document.getElementsByClassName("img-4") as HTMLCollectionOf<HTMLElement>;
    
    
      let query0 = window.matchMedia("(max-width: 620px)");
      let query620 = window.matchMedia("(min-width: 620px)");
      let query960 = window.matchMedia("(min-width: 960px)");
      let query1200 = window.matchMedia("(min-width: 1200px)");
      
      
      window.onscroll = () => {
    
    
        if (query0.matches) {
          
          let pos: number = window.scrollY * 2.5  - 2400;
          img1[0].style.right =  `${pos}px`;
          let pos2: number= window.scrollY * 2.5 - 3100;
          img2[0].style.right =  `${pos2}px`;
          let pos3: number = window.scrollY * 2.5 - 3800;
          img3[0].style.right =  `${pos3}px`;
          let pos4: number = window.scrollY * 2.5 - 4500;
          img4[0].style.right =  `${pos4}px`;
        
      }
        if (query620.matches) {
          let pos: number = window.scrollY * 2.5  - 4000;
          img1[0].style.right =  `${pos}px`;
          let pos2: number= window.scrollY * 2.5 - 3700;
          img2[0].style.right =  `${pos2}px`;
          let pos3: number = window.scrollY * 2.5 - 4400;
          img3[0].style.right =  `${pos3}px`;
          let pos4: number = window.scrollY * 2.5 - 5200;
          img4[0].style.right =  `${pos4}px`;
        }
    
        if (query960.matches) {
          let pos: number = window.scrollY * 2.5  - 3000;
          img1[0].style.right =  `${pos}px`;
          let pos2: number= window.scrollY * 2.5 - 4000;
          img2[0].style.right =  `${pos2}px`;
          let pos3: number = window.scrollY * 2.5 - 5000;
          img3[0].style.right =  `${pos3}px`;
          let pos4: number = window.scrollY * 2.5 - 6200;
          img4[0].style.right =  `${pos4}px`;
        }
    
        if (query1200.matches) {
          let pos: number = window.scrollY * 3  - 4000;
          img1[0].style.right =  `${pos}px`;
          let pos2: number = window.scrollY * 3 - 5500;
          img2[0].style.right =  `${pos2}px`;
          let pos3: number = window.scrollY * 3 - 7000;
          img3[0].style.right =  `${pos3}px`;
          let pos4: number = window.scrollY * 3 - 8200;
          img4[0].style.right =  `${pos4}px`;
        }
      };
    
    
     
      
      window.addEventListener("resize", resizeWindow);
    
      function resizeWindow (_event: Event): boolean {
        if (query1200.matches) {
          
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
        return(query1200.matches);
      }
    
      
      if (resizeWindow && query1200.matches) {
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
    
          let pos: number = window.scrollY * 3  - 4000;
          img1[0].style.right =  `${pos}px`;
          let pos2: number = window.scrollY * 3 - 5500;
          img2[0].style.right =  `${pos2}px`;
          let pos3: number = window.scrollY * 3 - 7000;
          img3[0].style.right =  `${pos3}px`;
          let pos4: number = window.scrollY * 3 - 8200;
          img4[0].style.right =  `${pos4}px`;
          
          };
        }
    
      
      
    
    /*Footer*/
    let footerDeckel = document.getElementById("footerDeckel");
    let fadeDeckelWhenInView = new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio <= 0 === false) { // Wenn in viewport
            footerDeckel.classList.add("deckelFadeIn");
        }
    });
    fadeDeckelWhenInView.observe(footerDeckel);
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
})(RWD || (RWD = {}));
//# sourceMappingURL=script.js.map