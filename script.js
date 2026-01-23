const costat1 = ["🥷🏼", "👮🏻‍♂️", "🧔🏻", "👩🏼‍🦰", "👦🏽",  "👦🏼 ", "👧🏻", "👧🏼"];
const barca = [];
const costat2 = [];

const contenidorC1 = document.getElementById("personatges-c1");
const barcaC2=document.getElementById("barca-display");
const contenidorC3 = document.getElementById("personatges-c3");
const missatgeDisplay = document.getElementById("missatge");

function actualitzarInterficie() {
    // Netejar el contenidor abans de tornar a dibuixar
    contenidorC1.innerHTML = "";
    barcaC2.innerHTML = "";
    contenidorC3.innerHTML = "";

    costat1.forEach(element => {

        const boto = document.createElement("button");
        boto.textContent = element;

        boto.addEventListener("click", () => {
                // Exemple de lògica: passar del costat 1 a la barca
           if(barca.length >= 2){
               missatgeDisplay.textContent = `no`;
           }
           else{
               let index = costat1.indexOf(element);
               let elementAMoure=costat1.splice(index,1);
               barca.push(...elementAMoure);
               // Mostram el missatge del que ha passat.  Recomanat només els errors
               missatgeDisplay.textContent = `Has clicat: ${element}, que està a la posició ${index}. Hauries de moure'l a la barca!`;
               actualitzarInterficie();
           }


        });

        contenidorC1.appendChild(boto);

    });

    barca.forEach(element => {

        const boto = document.createElement("button");
        boto.textContent = element;

        barcaC2.appendChild(boto)

    });

    costat2.forEach(element => {

        const boto = document.createElement("button");
        boto.textContent = element;

        boto.addEventListener("click", () => {

            // Exemple de lògica: passar del costat 1 a la barca
            let index = costat2.indexOf(element);

            let elementAMoure=costat2.splice(index,1);
            barca.push(...elementAMoure);

            // Mostram el missatge del que ha passat.  Recomanat només els errors
            missatgeDisplay.textContent = `Has clicat: ${element}, que està a la posició ${index}. Hauries de moure'l a la barca!`;

            actualitzarInterficie();

        });

        contenidorC3.appendChild(boto);
    });
}

function buidarBarca() {


     let index = barca.indexOf(element)
     let elementAMoure=barca.splice(index, 1);


}