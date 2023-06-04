var currentLocation = null;
var score = 0;
var x = 0;
var y = 0;
var distance;
var indexes = [];
var i = 0;
while(i < locations.length){
    indexes.push(i);
    i += 1;
}
function getRandLocation(){
    if(indexes.length == 0){
        end();
        return document.getElementById("first").innerHTML = "You finished all current locations!";
    }
    var randnum = Math.floor(Math.random() * indexes.length);
    currentLocation = locations[indexes[randnum]];
    indexes.splice(randnum, 1)
    document.getElementById("first").innerHTML = "";
    distance = null;
    document.getElementById("distance").textContent = distance;
    document.getElementById("second").innerHTML = "";
    document.getElementById("result").innerHTML = '<img src="'+currentLocation.src+'" height="403" width="302">';
    return document.getElementById("guessbutton").innerHTML = '<input type="button" onclick="guess()" value="Guess!">';    
}
function end(){
    document.getElementById("first").innerHTML = " ";
    document.getElementById("distance").textContent = null;
    document.getElementById("second").innerHTML = "";
}
let container = document.getElementById("container");

container.addEventListener("click", function(event) {
    let rect = container.getBoundingClientRect();
    x = event.clientX - rect.left;  // x position within the element.
    y = event.clientY - rect.top;   // y position within the element.
    let dot = document.getElementById("dot");
    var dotx = x-5;
    var doty = y-5;
    dot.style.left = dotx + 'px';
    dot.style.top = doty + 'px';            
});
function guess(){
    var dx = x - currentLocation.coordinates.x;
    var dy = y - currentLocation.coordinates.y;    
    distance = Math.floor(Math.sqrt(dx*dx + dy*dy)*(385/553));
    document.getElementById("first").innerHTML = "Your guess is ";
    document.getElementById("distance").textContent = distance;
    document.getElementById("second").innerHTML = "m away";
    score += (100 - distance);
    score = Math.floor(score);
    let dot = document.getElementById("dot");
    var dotx = currentLocation.coordinates.x - 5;
    var doty = currentLocation.coordinates.y - 5
    dot.style.left = dotx + 'px';
    dot.style.top = doty + 'px';
    document.getElementById("score").textContent = score;
    return document.getElementById("guessbutton").innerHTML = "";
}
