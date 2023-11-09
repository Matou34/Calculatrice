let operateur;
 //********************************************** creation du h1****************************************** */
let Titre = document.createElement("h1");
Titre.className = "titre";
Titre.textContent = "Calculatrice";
document.body.appendChild(Titre);


function createDiv() {
    for (let i = 0; i < 2; i++) {
        let myDiv = document.createElement("div");
        myDiv.id = "div" + i;
        myDiv.className = "Div" + i;
        document.body.appendChild(myDiv);
    }
}

const buttonsOperation = [
    "+","-","*","/"
];


function createButton() {
    for (let i = 0; i < buttonsOperation.length; i++) {
        const operation = buttonsOperation[i];
        let myButton = document.createElement("button");
        myButton.id = "button" + i;
        myButton.type = "button";
        myButton.value = operation;
        myButton.className = "operation"; 
        let container = document.getElementById("div0");
        container.appendChild(myButton);
        myButton.textContent = operation; 
        myButton.setAttribute("onclick","getOperator('"+operation+"');") ;
        
    }
}
function createInput() {
    for (let i = 0; i < 2; i++) {
        if(i === 1) {
            createButton();
        }
        let myInput = document.createElement("input");
        myInput.id = "input" + i;
        myInput.type = "number"
        myInput.className = "Input" + i;
        let container = document.getElementById("div0");
        container.appendChild(myInput);
    }
}

function createBoutonEnvoyer(){
    let myBoutton = document.createElement("button");
    myBoutton.id = "BtnEnvoyer";
    myBoutton.className = "BtnEnvoyer"; 
    myBoutton.textContent = "=";
    let container = document.getElementById("div0");
    container.appendChild(myBoutton);
    myBoutton.setAttribute("onclick","getResultat();") ;

}

//**************************************** Boutton envoyer ********************************************* */


$(document).ready(function() {
    createDiv();
    createInput();
    createBoutonEnvoyer();
});

function getOperator(p1) {
    operateur = p1;
}

function getResultat() {
    let Input1 = document.getElementById("input0").value;
    let Input2 = document.getElementById("input1").value;
    let reponse;
    reponse = (eval(Input1.toString() + operateur + Input2.toString()));

    document.getElementById("div1").innerHTML = reponse;
}






