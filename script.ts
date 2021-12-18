namespace script { 


        document.getElementById("dogfood").animate([
          {transform: "translate(0)px"},
          {transform: "translate(-300px)"}
        ]);

        let divButton: HTMLElement = document.getElementById("buttonZurück");
        let buttonWeiter: HTMLButtonElement = document.createElement("button");
        buttonWeiter.appendChild(document.createTextNode("zurück"));
        divButton.appendChild(buttonWeiter);
     
    }