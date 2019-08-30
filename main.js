
function italique() {
    var getText=document.getElementById('texte');
    if(getText.style.fontStyle!="italic"){
        getText.style.fontStyle="italic";
    }else{
        getText.style.fontStyle="normal";
    };
}

function bold() {
    var getText=document.getElementById('texte');
    if(getText.style.fontWeight=="normal"){
        getText.style.fontWeight="bold";
    }else{
        getText.style.fontWeight="normal";
    };
}

function souligne() {
    var getText=document.getElementById('texte');
    if(getText.style.textDecoration=="none"){
        getText.style.textDecoration="underline";
    }else{
        getText.style.textDecoration="none";
    };
}


function effacer() {
    document.getElementById('texte').value = "";
}

function changercouleur() {
        document.getElementById("texte").style.color = document.getElementById('color').value;
    }

function changersize() {
        document.getElementById("texte").style.fontSize = document.getElementById('size').value +'px';
    }

 function changerfont() { 
        document.getElementById("texte").style.fontFamily = document.getElementById('font').value;
    }