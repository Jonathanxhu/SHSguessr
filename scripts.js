var currentLocation = null;
var score = 0;
var x = 0;
var y = 0;
var locations = [
    {src: 'https://drive.google.com/uc?export=view&id=1ZCHYpEnYeAnlQd39PQ3p2r2iF3cqWwPD', coordinates: {x: 694, y: 166}},
    {src: 'https://drive.google.com/uc?export=view&id=1jo1AW3jObbAywe5-mSj73idD51qbYvjh', coordinates: {x: 685, y: 472}},
    {src: 'https://drive.google.com/uc?export=view&id=1e4dp4YWwhg31mzvmeJ1eglM6Uzk_ly6L', coordinates: {x: 954, y: 341}},
];
function getRandLocation(){
    currentLocation = locations[Math.floor(Math.random() * locations.length)];
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
    return document.getElementById("score").textContent = score;                
});
function guess(){
    var dx = x - currentLocation.coordinates.x;
    var dy = y - currentLocation.coordinates.y;    
    var distance = Math.sqrt(dx*dx + dy*dy);
    alert("Distance Away: " + distance);
    score += (100 - distance);
    score = Math.floor(score);
    let dot = document.getElementById("dot");
    var dotx = currentLocation.coordinates.x - 5;
    var doty = currentLocation.coordinates.y - 5
    dot.style.left = dotx + 'px';
    dot.style.top = doty + 'px';
    return document.getElementById("score").textContent = score;
}