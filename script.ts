namespace script { 


        document.getElementById("dogfood").animate([
          {transform: "translate(0)px"},
          {transform: "translate(-300px)"}
        ]);

        let divButton: HTMLElement = document.getElementById("buttonZurück");
        let buttonWeiter: HTMLButtonElement = document.createElement("button");
        buttonWeiter.appendChild(document.createTextNode("zurück"));
        divButton.appendChild(buttonWeiter);

        let divButton2: HTMLElement = document.getElementById("buttonWeiter");
        let buttonWeiter2: HTMLButtonElement = document.createElement("button");
        buttonWeiter2.appendChild(document.createTextNode("zurück"));
        divButton2.appendChild(buttonWeiter);


     
    }