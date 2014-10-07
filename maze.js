var hits = 0;
var i = 0;

window.onload = function() {
    $("start").onclick = startGame;
    $("end").onmouseover = endGame;
    var bounds = $$("div#maze div.boundary");
    for (i = 0; i < bounds.length; i++) {
        bounds[i].onmouseover = strikeOut;
    }
}



function startGame() {
    hits = 0;
    var bounds = $$("div#maze div.boundary");
    for ( i = 0; i < bounds.length; i++) {
        bounds[i].removeClassName("youlose");
    }
}

function endGame() {
    if(hits != 0) {
        alert("Sorry, you lost. :[");
    } else {
        alert("You win! :]");
    }
}

function strikeOut() {
    hits += 1;
    var bounds = $$("div#maze div.boundary");
    for ( i = 0; i < bounds.length; i++) {
        bounds[i].addClassName("youlose");
    }
}