var currentLocation = null;
var score = 0;
var x = 0;
var y = 0;
var distance;
var locations = [
    {src: 'https://raw.githubusercontent.com/Jonathanxhu/SHSguessr/main/images/IMG_1304.jpg', coordinates: {x: 694, y: 166}},
    {src: 'https://raw.githubusercontent.com/Jonathanxhu/SHSguessr/main/images/IMG_1332.jpg', coordinates: {x: 685, y: 472}},
    {src: 'https://raw.githubusercontent.com/Jonathanxhu/SHSguessr/main/images/IMG_1358.jpg', coordinates: {x: 954, y: 341}},
    {src: 'https://raw.githubusercontent.com/Jonathanxhu/SHSguessr/main/images/IMG_1319.jpeg', coordinates: {x: 434, y: 251}},
    {src: 'https://raw.githubusercontent.com/Jonathanxhu/SHSguessr/main/images/IMG_1321.jpeg', coordinates: {x: 365, y: 408}},
    {src: 'https://raw.githubusercontent.com/Jonathanxhu/SHSguessr/main/images/IMG_1344.jpeg', coordinates: {x: 849, y: 582}},
    {src: 'https://raw.githubusercontent.com/Jonathanxhu/SHSguessr/main/images/IMG_1357.jpeg', coordinates: {x: 959, y: 364}},
    {src: 'https://raw.githubusercontent.com/Jonathanxhu/SHSguessr/main/images/IMG_1360.jpeg', coordinates: {x: 937, y: 291}},
    {src: 'https://raw.githubusercontent.com/Jonathanxhu/SHSguessr/main/images/IMG_1323.jpeg', coordinates: {x: 481, y: 363}},
];
function getRandLocation(){
    currentLocation = locations[Math.floor(Math.random() * locations.length)];
    document.getElementById("first").innerHTML = "";
    distance = null;
    document.getElementById("distance").textContent = distance;
    document.getElementById("second").innerHTML = "";
    document.getElementById("guessbutton").innerHTML = '<input type="button" onclick="guess()" value="Guess!">';
    return document.getElementById("result").innerHTML = '<img src="'+currentLocation.src+'" height="403" width="302">';
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
    distance = Math.sqrt(dx*dx + dy*dy);
    document.getElementById("first").innerHTML = "Your guess is ";
    document.getElementById("distance").textContent = distance;
    document.getElementById("second").innerHTML = " away";
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
