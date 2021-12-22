"use strict";
var RWD;
(function (RWD) {
    let grafikklein = document.getElementById("kreis-grafik-klein");
    grafikklein.addEventListener("click", function () {
        grafikklein.classList.add("aktiv");
    });
    let grafikgross = document.getElementById("kreis-grafik-groß");
    grafikgross.addEventListener("click", function () {
        grafikgross.classList.add("aktiv");
    });
})(RWD || (RWD = {}));
//# sourceMappingURL=script.js.map