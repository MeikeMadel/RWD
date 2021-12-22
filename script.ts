
declare var jquery: any; 

     
namespace RWD {

  let grafikklein: HTMLElement = document.getElementById("kreis-grafik-klein");

  grafikklein.addEventListener("click", function() {
    grafikklein.classList.add("aktiv");
  });

  let grafikgross: HTMLElement = document.getElementById("kreis-grafik-groß");

  grafikgross.addEventListener("click", function() {
    grafikgross.classList.add("aktiv");
  });

  
  
}