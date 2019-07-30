function hello(){
    var element=document.getElementById("input1");
    console.log(element.value);
    element.value="hello world";
    alert('hello world');
}

function calcul(){
    var pht=document.getElementById("pht").value;
    var pttc = pht * 1.2;
    pttc = pttc.toFixed(2);
    document.getElementById("pttc").value = pttc;
}


/* var nombre=Math.round(Math.random()*10+1); */
/*var coup_restant = 10;
var nombre = 5;

function controle(){
    for (coup_restant = 10; coup_restant=0; coup_restant--){
        var val=document.getElementById("val").value;
        if (val==nombre){
            var info = "Vous avez gagné";
        }
        else if (val<nombre){
            var info = "Plus grand";
        }
        else if (val>nombre){
            var info = "Plus petit";
        }
        document.getElementById("info").value = info;
    document.getElementById("coup_restant").value = coup_restant;
    }
}

function new_game(){

} */


var nombre=Math.round(Math.random()*10+1);
var coup_restant = 10;
var tentative = 0;

function control(){
    var proposition=document.getElementById("proposition").value;
    tentative++;
    document.getElementById("restant").innerHTML=coup_restant - tentative;
    if(proposition==nombre){
        document.getElementById("message").innerHTML="gagné en" + tentative + "tentatives";
        lock();
    } 
    else if(tentative==10){
        document.getElementById("message").innerHTML="perdu le chiffre était" + nombre;
        lock();
    } 
    else{  
        if (proposition>nombre){
            document.getElementById("message").innerHTML="Trop grand";
        }
        else{
            document.getElementById("message").innerHTML="Trop petit";
        }
    }
}

function lock(){
    document.getElementById("proposition").disabled="disabled";
    document.getElementById("envoyer").disabled="disabled";
}

var images = ["rectangle", "carre", "parallelo", "trapeze", "triangle", "cercle"];

function images(){
    document.getElementById("").src=""
}


 function envoyer(){
    var prenom=document.getElementById("prenom").value;
    var nom=document.getElementById("nom").value;
    var mail=document.getElementById("mail").value;
    var ddn=document.getElementById("ddn").value;

    document.getElementById("restant").innerHTML=coup_restant - tentative;
    if(proposition==nombre){
        document.getElementById("message").innerHTML="gagné en" + tentative + "tentatives";
        lock();
    } 
    else if(tentative==10){
        document.getElementById("message").innerHTML="perdu le chiffre était" + nombre;
        lock();
    } 
    else{  
        if (proposition>nombre){
            document.getElementById("message").innerHTML="Trop grand";
        }
        else{
            document.getElementById("message").innerHTML="Trop petit";
        }
    }
}


function checkPrenom(){
    nonVide(document.getElementById("prenom"));
    min3Caractere(document.getElementById("prenom"));
}

function checkNom(){
    nonVide(document.getElementById("nom"));
    min3Caractere(document.getElementById("nom"));
}

function checkMail(){
    var element=document.getElementById("mail");
    nonVide(element);
    var expr = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(expr.test(element.value)){
        document.getElementById(element.id + "Erreur").className="cacher";
    }
    else{
        document.getElementById(element.id + "Erreur").className="visible";
        document.getElementById(element.id + "Erreur").innerHTML="mail invalide";
    }
}

function checkdtNaiss(){
    nonVide(document.getElementById("dtNaiss"));
    nonVide(element);
    var expression1=new RegExp("^ ((0[1-9])|([1-2][0-9])|(3[01])) [-/] ((0[1-9])|(1[0-2])) [-/] \\d{4}$");
    if(expression1.test(element.value)){
        document.getElementById(element.id + "Erreur").className="cacher";
    }
    else{
        document.getElementById(element.id + "Erreur").className="visible";
        document.getElementById(element.id + "Erreur").innerHTML="date invalide";
    }
}

function min3Caractere(element){
    var expression = new RegExp("^[a-zA-Z] {2,} [a-zA-Z] + | (\\s | - [a-zA-Z] {2,}) {1,} $")
    if(expression.test(element.value)){
        document.getElementById(element.id + "Erreur").className="cacher";
    }
    else{
        document.getElementById(element.id + "Erreur").className="visible";
        document.getElementById(element.id + "Erreur").innerHTML="3 caracteres minimum";
    }
}

function nonVide(element){
    if(element.value){
        document.getElementById(element.id + "Erreur").className="cacher";
    } 
    else{
        document.getElementById(element.id + "Erreur").className="visible";
    }
}



var annuaire= [ {
    prenom:'Olivier', 
    nom:'Gozlan'
    }, {
    prenom:'Steven', 
    nom:'Bizet'
    }, {
    prenom:'Lucas', 
    nom:'Bruguier'
    } ];

function list(){
    var tr, tdPrenom, tdNom, tdEdit, bEdit, tdDel, bDel;
    document.getElementById("tbody").innerHTML="";
    for(var p in annuaire){
        tdPrenom=document.createElement("td")
        tdPrenom.innerHTML=annuaire[p].prenom;
        tdNom=document.createElement("td")
        tdNom.innerHTML=annuaire[p].nom;
        bEdit = document.createElement("button");
        bEdit.innerHTML="editer";
        bEdit.onclick=edit;
        bEdit.name=p;
        bEdit.className="btn btn-success";
        tdEdit = document.createElement("td");
        tdEdit.appendChild(bEdit);
        bDel = document.createElement("button");
        bDel.name=p;
        bDel.innerHTML="supprimer";
        bDel.onclick=del;
        bDel.className="btn btn-danger"
        tdDel=document.createElement("td");
        tdDel.appendChild(bDel);
        tr=document.createElement("tr")
        tr.appendChild(tdPrenom);
        tr.appendChild(tdNom);
        tr.appendChild(tdEdit);
        tr.appendChild(tdDel);
        document.getElementById("tbody").appendChild(tr);
    }
}

function del(event){
    annuaire.splice(event.target.name, 1);
    list();
}


function add(){
    var obj={
        prenom: document.getElementById("prenom").value,
        nom : document.getElementById("nom").value
    };
    annuaire.push(obj);
    list();
}

function edit(event){
    //recuperer id button
    //aller chercher case id
    //charger dans input
    //supprimer la case du tableau
    var entree = annuaire[event.target.name];
    document.getElementById("prenom").value=entree.prenom;
    document.getElementById("nom").value=entree.nom;
    annuaire.splice(event.target.name, 1);
}