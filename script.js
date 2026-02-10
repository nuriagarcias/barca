// Elements del joc
const costat1 = ["🥷🏼", "👮🏻‍♂️", "🧔🏻", "👩🏼‍🦰", "👦🏽",  "👦🏼 ", "👧🏻", "👧🏼"];
const barca = [];
const costat2 = [];

let voraBarca = 'esquerra'

const contenidorC1 = document.getElementById("personatges-c1");
const barcaC2=document.getElementById("barca-display");
const zonaBarca=document.getElementById("zona-barca");
const barcaText=document.getElementById("btn-creuar");
const contenidorC3 = document.getElementById("personatges-c3");
const missatgeDisplay = document.getElementById("missatge");


// Funció que actualitza els canvis
function actualitzarInterficie() {
    // Netejar el contenidor abans de tornar a dibuixar
    contenidorC1.innerHTML = "";
    barcaC2.innerHTML = "";
    contenidorC3.innerHTML = "";

    // Costat esquerre del riu
    costat1.forEach(element => {

        const boto = document.createElement("button");
        boto.textContent = element;

        boto.addEventListener("click", () => {
                // Exemple de lògica: passar del costat 1 a la barca
           if(barca.length >= 2){
               missatgeDisplay.textContent = `No pot haver més de dos`;
           }
           else if(voraBarca==='dreta'){
               missatgeDisplay.textContent = `Està a l'altra banda del riu`
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
        boto.addEventListener("click", () => {

            if (voraBarca==='esquerra'){
                let index = barca.indexOf(element);
                let elementAMoure = barca.splice(index, 1);
                costat1.push(...elementAMoure);

                // Mostram el missatge del que ha passat.  Recomanat només els errors
                missatgeDisplay.textContent = `Has clicat: ${element}, que està a la posició ${index}. Hauries de moure'l a la barca!`;

            } else {
                let index = barca.indexOf(element);
                let elementAMoure = barca.splice(index, 1);
                costat2.push(...elementAMoure);
                comprovar();

                // Mostram el missatge del que ha passat.  Recomanat només els errors
                missatgeDisplay.textContent = `Has clicat: ${element}, que està a la posició ${index}. Hauries de moure'l a la barca!`;

            }
                //creuar();
                actualitzarInterficie();
        });
        barcaC2.appendChild(boto)


    });

// Costat a la dreta del riu
    costat2.forEach(element => {

        const boto = document.createElement("button");
        boto.textContent = element;

        boto.addEventListener("click", () => {
            // Exemple de lògica: passar del costat 1 a la barca
            if(barca.length >= 2){
                missatgeDisplay.textContent = `No pot haver més de dos`;
            }
            else if(voraBarca==='esquerra'){
                missatgeDisplay.textContent = `Està a l'altra banda del riu`
            }
            else{
                let index = costat2.indexOf(element);
                let elementAMoure=costat2.splice(index,1);
                barca.push(...elementAMoure);
                // Mostram el missatge del que ha passat.  Recomanat només els errors
                missatgeDisplay.textContent = `Has clicat: ${element}, que està a la posició ${index}. Hauries de moure'l a la barca!`;
                actualitzarInterficie();
            }

        });

        contenidorC3.appendChild(boto);
    });

}

// Funció que aplica les regles del joc
function buidarBarca() {
    if(barca.length <= 0){
        missatgeDisplay.textContent = `No hi ha ningú`;
    }
    else if (!((barca.includes('👮🏻‍♂️') ||  barca.includes('🧔🏻') || barca.includes('👩🏼‍🦰'))))
    {
        missatgeDisplay.textContent = `No pots passar`;
    }
    else if ((barca.includes('👧🏻') || barca.includes('👧🏼')) && barca.includes('🧔🏻')){
        missatgeDisplay.textContent = 'Pare no pot estar amb filla'
    }
    else if ((barca.includes('👦🏽') || barca.includes('👦🏼 ')) && barca.includes('👩🏼‍🦰')){
        missatgeDisplay.textContent = 'Mare no pot estar amb fill'
    }

    else if((barca.includes('👩🏼‍🦰') || barca.includes('🧔🏻')) && barca.includes('🥷🏼')) {
        missatgeDisplay.textContent = 'Lladre no pot estar amb familia'
    }


    else if( (costat2.includes('🥷🏼') && !costat2.includes('👮🏻‍♂️')) && (costat2.includes('🥷🏼') && costat2.length!==1)) {
        // console.log(costat2.includes('🥷🏼'), !costat2.includes('👮🏻‍♂️'),(costat2.length!==1) )
        missatgeDisplay.textContent = 'Lladre no pot estar tot sol amb familia'
    }
    else if(costat2.includes('👩🏼‍🦰') && !costat2.includes('🧔🏻') && (costat2.includes('👦🏽')  || costat2.includes('👦🏼 '))) {
        missatgeDisplay.textContent = 'Mare no pot estar tot sola amb els fills'
    }
    else if(costat2.includes('🧔🏻') && !costat2.includes('👩🏼‍🦰') && (costat2.includes('👧🏻')  || costat2.includes('👧🏼'))) {
        missatgeDisplay.textContent = 'Pare no pot estar tot sola amb els filles'
    }


    else if(costat1.includes('👩🏼‍🦰') && !costat1.includes('🧔🏻') && (costat1.includes('👦🏽')  || costat1.includes('👦🏼 '))) {
        missatgeDisplay.textContent = 'Mare no pot estar tot sola amb els fills'
    }
    else if(costat1.includes('🧔🏻') && !costat1.includes('👩🏼‍🦰') && (costat1.includes('👧🏻')  || costat1.includes('👧🏼'))) {
        missatgeDisplay.textContent = 'Pare no pot estar tot sola amb els filles'
    }
    else if( (costat1.includes('🥷🏼') && !costat1.includes('👮🏻‍♂️')) && (costat1.includes('🥷🏼') && costat1.length!==1)) {
        missatgeDisplay.textContent = 'Lladre no pot estar tot sol amb familia'

    }


    // else if(!(((costat1.includes('🥷🏼') && (costat1.length = 1)) || (costat1.includes('🥷🏼') && costat1.includes('👮🏻‍♂️')))))
    // {
    //     missatgeDisplay.textContent = 'Lladre no pot estar amb familia'
    // }
    else{
        if (voraBarca === 'dreta'){
            voraBarca = 'esquerra';
            barcaText.innerHTML="CREUAR -->"
            zonaBarca.style.alignItems = "flex-start";

        }else {
            voraBarca = 'dreta';
            zonaBarca.style.alignItems = "flex-end";

            barcaText.innerHTML=" <-- CREUAR"

        }
    }




}

// Funció que comprova si has guanyat
function comprovar() {
    if (costat2.length == 8) {
        missatgeDisplay.textContent = 'Has guanyat!'
         setTimeout(alert('Has guanyat!'))
    }
}

// function creuar(){
//     const boto = document.getElementById("btn-creuar");
//     if (costat === "esquerra"){
//         voraBarca.style.alignItems = "flex-end";
//         boto.textContent = "⬅ CREUAR";
//         costat="dreta"
//     }
//     else{
//         voraBarca.style.alignItems = "flex-start";
//         boto.textContent = "CREUAR " ;
//         costat="esquerra";
//     }
// }

actualitzarInterficie();
